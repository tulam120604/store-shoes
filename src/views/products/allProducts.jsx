/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'E:/Shoes_Store/src/styles/products/allProducts.css'
import { Link } from 'react-router-dom';


const AllProducts = ({ all_san_pham, wrapper }) => {
    // theme
    let theme;

    if (wrapper) {
        theme = 'brightness(1) invert(0)';

    }
    else {
        theme = 'brightness(0) invert(1)';

    }

    // baner:
    for (let i = 0; i < all_san_pham.length; i++) {
        // console.log(i);
    }


    // phân trang
    let thisPage = 1;
    let limit = 9;
    const page1 = [];
    const loadItem = () => {
        let beginGet = limit * (thisPage - 1);
        let endGet = limit * thisPage - 1;
        all_san_pham.forEach((item, index) => {
            if (index >= beginGet && index <= endGet) {
                page1.push(all_san_pham[index]);
            }
        });
    }
    loadItem()

    // load list page
    const Page = []
    const listPage = () => {
        let countPage = Math.ceil(all_san_pham.length / limit);
        for (let i = 1; i <= countPage; i++) {
            Page.push(i);
        }
    }
    listPage()

    const handlePage = (d) => {
        console.log(d);
    }

    const renderListPage = (dataCallback) => {
        return (dataCallback.map((itemPage, index) => {
            return (<>
                <button onClick={handlePage(index + 1)}>{itemPage}</button>
            </>)
        }))
    }

    // list products :
    const renderAll = (dataAll) => {
        return (
            dataAll.map((sanPham, i) => {
                return (
                    <>
                        <div className="box drop-shadow-lg" key={i}>
                            <Link style={{ width: '100%' }} to={`/products/${sanPham.id}`}>
                                <div className="image">
                                    <img src={sanPham.image} alt="" />
                                </div >
                            </Link>
                            <div className="inforAllProductsPageClient">
                                <Link to={`/products/${sanPham.id}`}>
                                    <span>{sanPham.name}</span>
                                </Link>
                                {/* <h3>{sanPham.title}</h3> */}
                                <p>${sanPham.price}</p>
                                <section>
                                    <img src="../src/images/star.png" alt="" />
                                    <img src="../src/images/star.png" alt="" />
                                    <img src="../src/images/star.png" alt="" />
                                    <img src="../src/images/star.png" alt="" />
                                    <img src="../src/images/star.png" alt="" />
                                </section>
                                <button>+ add to cart</button>
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

            <span className='capitalize font-medium'>home &#8594; shop</span>

            <div className="main_allProducts">
                {/* menu */}

                <div className="menuProducts">
                    <div className="categories">
                        <span>categories</span>
                        <section>
                            <li>men</li>
                            <li>women</li>
                            <li>kids</li>
                        </section>
                    </div>

                    {/* -- */}
                    <div className="priceAllProdducts">
                        <span>price</span>
                        <select name="" id="">
                            <option value="1">low - hight &#8593;</option>
                            <option value="2">hight - low &#8595;</option>
                        </select>
                    </div>

                    {/* --- */}
                    <div className="sizeAllPriducts">
                        <span>size</span>
                        <section>
                            <button>s</button>
                            <button>m</button>
                            <button>l</button>
                            <button>xs</button>
                        </section>
                    </div>
                </div>

                {/* list products */}

                <div className="listProducts">
                    <div className="pageAllProducts">
                        {renderAll(page1)}
                    </div>
                    {/* next page */}
                    <div className="next_page_allProducts">
                        {renderListPage(Page)}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default AllProducts