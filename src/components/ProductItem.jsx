function ProductItem(props) {
    const { title, price, description, image, addToCart } = props
    
    return (
      <>
        <div className="card" style={{
            width: '18rem'
        }}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">{price}</p>
              <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
              
            </div>
        </div>
      </>
    )
  }
  
  export default ProductItem