function ProductFilter({ onCategoryChange, selectedCategory }) {
  return (
    <form className="product-filter">
      <select
        aria-label="Filter by category"
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="">All categories</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Unisex">Unisex</option>
      </select>
    </form>
  )
}

export default ProductFilter
