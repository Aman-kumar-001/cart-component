import React from 'react'
import '../home/home.css';
import Header from '../header/header';
import Products from '../products/products';

const Home =({productItem , handleAddProduct}) => {

  

  return (
    <div>
       <Header />
       <Products productItem={productItem} handleAddProduct={handleAddProduct}/>
    </div>
  )
}

export default Home;