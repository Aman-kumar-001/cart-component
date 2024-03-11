import React from 'react'
import '../home/home.css';
import Header from '../header/header';

function home({productItem}) {
  return (
    <div>
        
       <Header productItem={productItem}/>
    </div>
  )
}

export default home;