/* eslint-disable react/prop-types */
// import React from 'react'
// import { useState } from 'react'
// import { Carousel } from 'react-responsive-carousel';
// import { useState } from 'react';
// import { useState } from 'react'
import { useEffect } from 'react'
import 'E:/Shoes_Store/src/styles/home/body.css'

const BodyComponent = ({ wrapperBg, ProductPage, CateloriesHomePage }) => {


    let colorFilter = (wrapperBg.wrapper) ? 'invert(0.3)' : 'invert(0.8)'

    let wrapperProducts = (wrapperBg.wrapper) ? '#C7D4D9' : '#2E2E3F'
    let wrapperProductsImg = (wrapperBg.wrapper) ? '#E6E9EB' : '#4D4D5A'

    ProductPage.filter((e) => {
        if (e.name.search('boots') > 0) {
            // console.log(e.name);
        }
    })

    // next page products :
    const rightHanldeClick = () => {
        const products = document.querySelector('.products');
        const box = document.querySelector('.box');
        // console.log(box.clientWidth);
        products.scrollLeft = products.scrollLeft + (box.clientWidth + 75)
        // console.log(products.scrollLeft);


    }

    // previous page products
    const leftHandleClick = () => {
        const products = document.querySelector('.products');
        const box = document.querySelector('.box');
        // console.log(box.clientWidth);
        products.scrollLeft = products.scrollLeft - (box.clientWidth + 75)
        // console.log(products.scrollLeft);
    }


    return (<>
        <div className="catelories">
            <h4>catelories</h4>
            <div className="directory">
                <li>all</li>
                <li>boots</li>
                <li>shoes</li>
                <li>sandals</li>
                {/* {
                    CateloriesHomePage.map((menu, i) => {
                        return <>
                            <li onClick={clickMenu} className='danhmuc'>{menu.name}</li>
                        </>
                    })
                } */}
            </div>

            {/* --- */}

            <div className="products">
                {
                    ProductPage.map((sanPham, i) => {
                        return (
                            <>
                                <div style={{ background: wrapperProducts, transition: '0.2s' }}
                                    className="box" key={i}>
                                    <div style={{ background: wrapperProductsImg, transition: '0.2s' }}
                                        className="image">
                                        <img src={sanPham.image} alt="" />
                                    </div >
                                    <div className="infor">
                                        <section>
                                            <span>{sanPham.name}{i + 1}</span> <p>$ {sanPham.price}</p>
                                        </section>
                                        <h3>{sanPham.title}</h3>
                                        <div className="rating">
                                            <span>{sanPham.feedback}</span>
                                            <img src="../src/images/star.png" alt="" />
                                            <img src="../src/images/star.png" alt="" />
                                            <img src="../src/images/star.png" alt="" />
                                            <img src="../src/images/star.png" alt="" />
                                            <img src="../src/images/star.png" alt="" />
                                        </div>
                                        <button>buy now</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div >

            {/* --- */}
            <div className="next-page" >
                <img onClick={leftHandleClick} style={{ filter: colorFilter, transition: '0.2s' }} src="../src/images/back.png" alt="" />

                <img onClick={rightHanldeClick} style={{ filter: colorFilter, transition: '0.2s' }} src="../src/images/next.png" alt="" />
            </div >
        </div >
    </>)
}

export default BodyComponent