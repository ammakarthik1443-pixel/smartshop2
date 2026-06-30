function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-info">
        <h3>{title}</h3>

        <h4>₹{price}</h4>

        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;