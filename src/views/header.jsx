/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import 'E:/Shoes_Store/src/styles/header.css'



const HeaderComponent = ({ themeBg }) => {
  let imgColor;
  let headerColor;
  let inputColor;
  if (themeBg.Bg_Color) {
    imgColor = 'brightness(1) invert(0)';
    headerColor = '#ECECEC';
    inputColor = 'white';
  }
  else {
    imgColor = 'brightness(0) invert(1)';
    headerColor = '#222626'
    inputColor = 'black';
  }
  const [inputSearch, setinputSearch] = useState(true)

  const search = () => {
    setinputSearch(false)
  }
  const closeInputValue = () => {
    document.querySelector('#search').value = '';
  }


  return (
    <>
      <div style={{ background: headerColor, transition: '0.5s' }} className="header">
        <header>
          <div className="logo">
            <Link to='/'><span>neki</span></Link>
          </div>

          <div className="navbar">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>about</li>
            <li>contact</li>
          </div>

          <div className="menu">
            <li><img style={{ filter: imgColor }}
              onClick={search} src="../src/images/search.png" alt="" />
              <div style={{
                opacity: inputSearch ? '0' : '1', transition: '0.2s'
              }} className="search">
                <input style={{ background: inputColor }} type="text" id='search' placeholder='search' />
                <img style={{ filter: imgColor }}
                  onClick={closeInputValue} src="../src/images/x.png" alt="" />
              </div>
            </li>
            <li><img style={{ filter: imgColor }} src="../src/images/shopping-cart.png" alt="" /></li>
            <li>{themeBg.switch}</li>
            <li><button>login</button></li>
          </div>
        </header>
        {/* Router */}
      </div>
    </>
  )
}

export default HeaderComponent
