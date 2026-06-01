import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { cartService } from '../services/cartService'
import { products as fallbackProducts } from '../utils/constants'
import { CartContext } from './cartContextValue'

function normalizeCartItems(cart) {
  return (cart?.items || [])
    .filter((item) => item.product)
    .map((item, index) => {
      const product = item.product
      const fallback = fallbackProducts[index % fallbackProducts.length]

      return {
        ...product,
        backendId: product._id,
        color: product.color || fallback.color,
        id: product._id,
        image: product.images?.[0] || fallback.image,
        quantity: item.quantity,
      }
    })
}

function getProductId(product) {
  return product.backendId || product._id || product.id
}

function isMongoId(value) {
  return /^[a-f\d]{24}$/i.test(value)
}

export function CartProvider({ children }) {
  const { user } = useAuth()
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('philoveey-cart')

    return savedItems ? JSON.parse(savedItems) : []
  })
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    localStorage.setItem('philoveey-cart', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    if (!user?.token) return

    let active = true

    async function syncCart() {
      setSyncing(true)
      setError(null)

      try {
        const validLocalItems = items.filter((item) => isMongoId(getProductId(item)))

        for (const item of validLocalItems) {
          await cartService.add(getProductId(item), item.quantity)
        }

        const serverCart = await cartService.get()
        if (active) setItems(normalizeCartItems(serverCart))
      } catch (syncError) {
        if (active) setError(syncError)
      } finally {
        if (active) setSyncing(false)
      }
    }

    syncCart()

    return () => {
      active = false
    }
    // Run once when the authenticated user changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token])

  const addItem = (product) => {
    const productId = getProductId(product)

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => getProductId(item) === productId)

      if (existingItem) {
        return currentItems.map((item) =>
          getProductId(item) === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })

    if (user?.token && isMongoId(productId)) {
      cartService.add(productId).catch(setError)
    }
  }

  const removeItem = (productId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => getProductId(item) !== productId),
    )

    if (user?.token && isMongoId(productId)) {
      cartService.remove(productId).catch(setError)
    }
  }

  const updateItemQuantity = (productId, quantity) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          getProductId(item) === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )

    if (!user?.token || !isMongoId(productId)) return

    if (quantity > 0) {
      cartService.update(productId, quantity).catch(setError)
      return
    }

    cartService.remove(productId).catch(setError)
  }

  const clearCart = () => {
    setItems([])

    if (user?.token) {
      return cartService.clear().catch(setError)
    }

    return Promise.resolve()
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      addItem,
      clearCart,
      error,
      itemCount,
      items,
      removeItem,
      syncing,
      total,
      updateItemQuantity,
    }),
    [error, itemCount, items, syncing, total],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
