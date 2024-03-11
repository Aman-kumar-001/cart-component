import Home from '../src/component/home/home';
import {BrowserRouter } from 'react-router-dom';
import Data from './component/data';
import { useEffect, useState } from 'react';
// import data from './component/data';
function App() {

  const {productItem } = Data;
  const  [cartItem, setCartitem] = useState([]);

  const handleAddProduct = (productItem) => {
    const ProductExist = cartItem.find((item) => item.id===productItem.id );
    if(ProductExist){
      setCartitem(
        cartItem.map((item) =>
          item.id === productItem.id
          ?{...item, quantity: ProductExist.quantity +1}
          : item
        )
      )
    }else{
      setCartitem([...cartItem ,{...productItem ,  quantity:1}])
    }
  }

  useEffect(() =>{
    console.log(cartItem);
  },[])
  
  return (
    
   <div>
    <BrowserRouter>
    <Home productItem={productItem} cartItem={cartItem} handleAddProduct={handleAddProduct}/>
    </BrowserRouter>
     
   </div>
  );
}

export default App;
