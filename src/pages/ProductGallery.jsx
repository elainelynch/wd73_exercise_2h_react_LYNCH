import { useEffect, useState } from "react"
import ProductItem from "../components/ProductItem"

function ProductGallery() {
  const [products, setProducts] = useState([])

  const [cartItemCounter, setCartItemCounter] = useState(0)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
}, [setProducts])

function addToCart() {
  setCartItemCounter(cartItemCounter + 1)
}
    

  return (
    <>
      <h3>Cart Item: <span className="fw-bold"></span>{cartItemCounter}</h3>
      <div className="d-flex flex-wrap">   
        {
        products.map(
          product =>   <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
          addToCart={addToCart}
          />
          
        )
      }
      </div>
    </>
  )
  }
  
  export default ProductGallery