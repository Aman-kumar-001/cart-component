import React from "react";
import "../header/header.css";
import { Link } from "react-router-dom";
import Products from "../products/products";

function Header({productItem}) {
  return (
    <>
    <div className="box">
      <div className="header">HEADTHCARE</div>
      <div className="headerLinks">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/signup">signup</Link></li>
          <li><Link to="/cart">
            <i class="fa fa-shopping-cart"/></Link></li>
        </ul>
      </div>
      </div>

      <Products productItem={productItem}/>
    </>
  );
}

export default Header;
