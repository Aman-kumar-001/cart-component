import React  from 'react'
import '../products/products.css';

const Products = ({productItem , handleAddProduct}) => {

  

  return (
    
   <div className='products'>
    {productItem.map((data) => (
      <div className="container">
        <div className="card" key={data.id}>
          <img className='product-image' src={data.url}/>
        </div>

        <div className="products-name">{data.name}</div>
        <div className="products-name">{data.price}</div>

        <div className="button">
          <button onClick={() => handleAddProduct(data)}>Add to cart</button>
        </div>
        </div>))}
   </div>
   
  )
}

export default Products;