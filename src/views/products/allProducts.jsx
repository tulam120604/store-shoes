/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'E:/Shoes_Store/src/styles/products/allProducts.css'
import { Link } from 'react-router-dom';


const AllProducts = ({ all_san_pham, wrapper }) => {
    // console.log(all_san_pham);

    // theme
    let theme;
    let backgroundRating
    let backgroundButton
    if (wrapper) {
        theme = 'brightness(1) invert(0)';
        backgroundRating = 'white';
        backgroundButton = 'black'
    }
    else {
        theme = 'brightness(0) invert(1)';
        backgroundRating = 'black';
        backgroundButton = 'white';
    }

    // baner:
    for (let i = 0; i < all_san_pham.length; i++) {
        console.log(i);
    }





    // list products :
    const renderAll = (dataAll) => {
        return (
            dataAll.map((sanPham, i) => {
                return (
                    <>
                        <div className="box" key={i}>
                            <Link to={`/products/${sanPham.id}`}>
                                <div className="infor">
                                    <span>{sanPham.name}{i + 1}</span>
                                    <h3>{sanPham.title}</h3>
                                </div>
                                <div className="image">
                                    <img src={sanPham.image} alt="" />
                                </div >
                                <p>$ {sanPham.price}</p>
                            </Link>

                            <div className="rating">
                                <section>
                                    <img src="../src/images/star.png" alt="" />
                                    <img src="../src/images/star.png" alt="" />
                                    <img src="../src/images/star.png" alt="" />
                                    <img src="../src/images/star.png" alt="" />
                                    <img src="../src/images/star.png" alt="" />
                                    <span>(45)</span>
                                </section>
                                <button style={{ background: backgroundButton, color: backgroundRating }}>+ add to cart</button>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }
    return (<>
        <div className="all_products">
            {/* baner */}
            <div className="baner_Products">
                <img style={{ filter: theme, transition: '0.3s' }}
                    id='left' src="../src/images/left.png" alt="" />
                <div className="infor">
                    <span>neki running <h8>boots</h8></span>
                    <button>shop now</button>
                </div>
                <div className="img">
                    <img src="../src/images/sp4.png" alt="" />
                </div>
                <img style={{ filter: theme, transition: '0.3s' }}
                    id='right' src="../src/images/right.png" alt="" />
            </div>

            {/* menu */}

            <div className="menuProducts">
                <li>all</li>
                <li>men</li>
                <li>kids</li>
                <li>sale</li>
            </div>

            {/* list products */}

            <div className="listProducts">
                {renderAll(all_san_pham)}
            </div>
        </div>
    </>)
}

export default AllProducts