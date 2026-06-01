import { useState } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { productService } from '../services/productService'

function Admin() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('bestSeller', formData.get('bestSeller') ? 'true' : 'false')

    try {
      const product = await productService.create(formData)
      setSuccess(`${product.name} has been added to the shop.`)
      form.reset()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardLayout>
      <h1>Admin</h1>
      <form className="admin-product-form" onSubmit={handleSubmit}>
        <label>
          <span>Product Name</span>
          <input name="name" required placeholder="Classic Slide" />
        </label>
        <label>
          <span>Price</span>
          <input min="0" name="price" required type="number" placeholder="15000" />
        </label>
        <label>
          <span>Category</span>
          <select name="category" required defaultValue="">
            <option value="" disabled>Select category</option>
            <option>Men</option>
            <option>Women</option>
            <option>Unisex</option>
          </select>
        </label>
        <label className="form-wide">
          <span>Shoe Image</span>
          <input accept="image/*" name="image" required type="file" />
        </label>
        <label className="checkbox-field">
          <input name="bestSeller" type="checkbox" />
          <span>Best Seller</span>
        </label>
        {error ? <p className="form-message error">{error}</p> : null}
        {success ? <p className="form-message success">{success}</p> : null}
        <button className="button primary compact" disabled={loading} type="submit">
          {loading ? 'Adding product...' : 'Add Product'}
        </button>
      </form>
    </DashboardLayout>
  )
}

export default Admin
