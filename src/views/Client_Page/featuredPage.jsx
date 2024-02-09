/* eslint-disable react/prop-types */
// import React from 'react'
// import { useState } from 'react'
// import { Carousel } from 'react-responsive-carousel';
// import { useEffect } from 'react'
import '../../styles/Client_Page/featuredPage.css'
import { Link } from 'react-router-dom'

const FeaturedPage = ({ wrapperBg, ProductPage, CateloriesHomePage }) => {
    let colorFilter = (wrapperBg.wrapper) ? 'invert(0.3)' : 'invert(0.8)'
    // let wrapperProducts = (wrapperBg.wrapper) ? '#C7D4D9' : '#2E2E3F'
    let wrapperProductsImg = (wrapperBg.wrapper) ? '#E6E9EB' : '#FFFFFF'

    const bootsProduct = ProductPage.filter((e) => {
        if ((e.new === 1) || (e.new === 2)) {
            return e
        }
    })

    // next page products :
    const rightHanldeClick = () => {
        const products = document.querySelector('.products');
        const box = document.querySelector('.box');
        // console.log(box.clientWidth);
        products.scrollLeft = products.scrollLeft + (box.clientWidth + 25)
        // console.log(products.scrollLeft);
    }

    // previous page products
    const leftHandleClick = () => {
        const products = document.querySelector('.products');
        const box = document.querySelector('.box');
        // console.log(box.clientWidth);
        products.scrollLeft = products.scrollLeft - (box.clientWidth + 25)
        // console.log(products.scrollLeft);
    }

    // 
    const renderAll = (dataAll) => {
        return (
            dataAll.map((sanPham, i) => {
                const starFeeback = []
                for (let i = 0; i < sanPham.feedback; i++) {
                    starFeeback.push(i)
                }
                return (
                    <>
                        <div style={{ transition: '0.2s' }}
                            className="box" key={i}>
                            <Link to={`/products/${sanPham.id}`}>
                                <div style={{ background: wrapperProductsImg, transition: '0.2s', }}
                                    className="image">
                                    <img src={sanPham.image} alt="" />
                                </div >
                            </Link>
                            <div className="inforAndRating">
                                <section>
                                    <span>{sanPham.name}{i + 1}</span>
                                </section>
                                <p>$ {sanPham.price}</p>
                                <div className="rating">
                                    {(starFeeback).map(() => {
                                        return (<>
                                            <img src="../../src/images/star.png" alt="" />
                                        </>)
                                    })}
                                </div>
                                <button>buy now</button>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }


    // const bootsShoes = () => {
    //     renderAll(bootsProduct)
    // }

    return (<>
        <div className="catelories">
            <h4>Featured Products</h4>
            <div className="directory">
                {/* <li>all</li>
                <li onClick={bootsShoes}>boots</li>
                <li>shoes</li>
                <li>sandals</li> */}
                {
                    CateloriesHomePage.map((menu, i) => {
                        return <>
                            <li className='danhmuc' key={i}>{menu.name}</li>
                        </>
                    })
                }
            </div>

            {/* --- */}

            <div className="products">
                {
                    renderAll(bootsProduct)
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

export default FeaturedPage