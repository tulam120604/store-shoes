/* eslint-disable react/prop-types */
// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/header.css'
import { useState } from 'react';



const HeaderComponent = ({ themeBg }) => {
  const [countItemCarts, setCountItemCarts] = useState()

  let imgColor;
  let headerColor;
  if (themeBg.Bg_Color) {
    imgColor = 'brightness(1) invert(0)';
    headerColor = '#ECECEC';
  }
  else {
    imgColor = 'brightness(0) invert(1)';
    headerColor = '#222626'
  }

  return (
    <>
      <div style={{ background: headerColor, transition: '0.5s' }} className="header">
        <header>
          <div className="logo">
            <Link to='/'><span>fruits</span></Link>
          </div>

          <div className="navbar">
            <li>
              <NavLink to="/" style={({ isActive }) => ({
                color: isActive ? "rgb(23, 246, 30)" : "",
              })}>trang chủ</NavLink>
            </li>
            <li>
              <NavLink to="/products" style={({ isActive }) => ({
                color: isActive ? 'rgb(23, 246, 30)' : ''
              })}>sản phẩm</NavLink>
            </li>
            <li>thông tin</li>
            <li>liên hệ</li>
          </div>

          <div className="menu">
            <li><Link to='cart' ><img style={{ filter: imgColor }} src="../../src/images/shopping-cart.png" alt="" /></Link>
              <div className="soLuongSanPhamTrongGio">{countItemCarts}</div>
            </li>
            <li>{themeBg.switch}</li>
            <li><Link to='login'><button>đăng nhập</button></Link></li>
          </div>
        </header>
        {/* Router */}
      </div>
    </>
  )
}

export default HeaderComponent
