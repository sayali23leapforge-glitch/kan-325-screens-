function ProductCard({ product }) {
  return (
    <article className={`product-card ${product.disabled ? 'disabled' : ''} ${product.featured ? 'featured' : ''}`}>
      <div className="product-card-head">
        <div className={`product-icon ${product.iconTone}`} aria-hidden="true">
          {product.icon}
        </div>
        <div className="product-title-wrap">
          <div className="product-title-row">
            <h3>{product.title}</h3>
            {product.featured && <span className="product-pill featured-pill">RECENTLY USED</span>}
            {product.statePill && <span className={`product-pill ${product.statePillTone}`}>{product.statePill}</span>}
          </div>
          <p>{product.description}</p>
        </div>
      </div>

      <div className="product-tags">
        {product.tags.map((tag) => (
          <span key={tag.label} className={`tag ${tag.tone}`}>
            {tag.label}
          </span>
        ))}
      </div>

      <div className="product-stats">
        {product.stats.map((stat) => (
          <span key={stat.label}>
            {stat.value} <small>{stat.label}</small>
          </span>
        ))}
      </div>

      <button type="button" className={`product-cta ${product.disabled ? 'disabled' : ''}`} disabled={product.disabled}>
        {product.cta}
        <span aria-hidden="true">→</span>
      </button>
    </article>
  )
}

export default ProductCard
