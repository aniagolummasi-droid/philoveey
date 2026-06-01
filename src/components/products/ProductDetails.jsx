import ImagePanel from '../home/ImagePanel'

function ProductDetails({ product }) {
  if (!product) return null

  return (
    <section className="product-details">
      <ImagePanel
        alt={`${product.name} in ${product.color}`}
        className="product-detail-image"
        src={product.image}
      />
      <div>
        <p>{product.category}</p>
        <h1>{product.name}</h1>
        <p>{product.color}</p>
      </div>
    </section>
  )
}

export default ProductDetails
