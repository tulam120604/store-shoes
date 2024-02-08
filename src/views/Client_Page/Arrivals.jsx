/* eslint-disable react/prop-types */
import { useState } from 'react'
import 'E:/Shoes_Store/src/styles/Client_Page/Arrivals.css'
import { Link } from 'react-router-dom'


const NewArrivals = ({ ProductPage, add }) => {
    const [trangHienTai, setTrangHienTai] = useState(1);
    const [soLuongItemPage] = useState(3)
    // const [prePage, setPrePage] = useState([]);
    // loc san pham moi nhat
    const newProducts = ProductPage.filter((e) => {
        if (e.new === 1 || e.new === 2) {
            return e
        }
    })
    // console.log(newProducts.length);

    // phan loai san pham : special
    const dataSpecial = newProducts.filter((item) => {
        if (item.sector === 'spec') {
            return item
        }
    })
    // popular
    const dataPopular = newProducts.filter((item) => {
        if (item.sector === 'po') {
            return item
        }
    })

    // popular
    const dataRecent = newProducts.filter((item) => {
        if (item.sector === 'rec') {
            return item
        }
    })

    //  add:
    // const add = () => {
    //     alert('click')
    // }

    // phân trang:
    const itemLastPage = soLuongItemPage * trangHienTai;
    const itemFirstPage = itemLastPage - soLuongItemPage
    // trang speacial
    const dataPageSpecial = dataSpecial.slice(itemFirstPage, itemLastPage);
    // trang speacial
    const dataPagePopular = dataPopular.slice(itemFirstPage, itemLastPage);
    // trang speacial
    const dataPageRecent = dataRecent.slice(itemFirstPage, itemLastPage);
    const tongSoPage = Math.ceil(newProducts.length / soLuongItemPage);
    // setNextPage(dataPage)
    // console.log(nextPage);

    // previous
    const pre = () => {
        setTrangHienTai(trangHienTai - 1);
        if (trangHienTai == 1) {
            setTrangHienTai(1);
            // console.log(123);
        }
    }

    // next
    const next = () => {
        setTrangHienTai(trangHienTai + 1);
        if (trangHienTai == tongSoPage) {
            setTrangHienTai(tongSoPage)
        }
    }

    return (<>
        <div className="Arrivals">
            {/* special */}
            <div className="block_arrivals">
                <h5>special</h5>
                <div className="renderProductsArrivals">
                    {
                        dataPageSpecial.map((sanPhamMoi, i) => {
                            return (<>

                                <div key={i} className="box_arrivals">
                                    <div className="img">
                                        <Link style={{ width: '100%', height: '100%' }} to={`/products/${sanPhamMoi.id}`}>
                                            <img src={sanPhamMoi.image} alt="" />
                                        </Link>
                                    </div>

                                    {/* -- */}
                                    <div className="inforArrivalsPage">
                                        <div className="element">
                                            <p>${sanPhamMoi.price}</p>
                                            <Link style={{ width: '35%' }} to={`/products/${sanPhamMoi.id}`}>
                                                <span>{sanPhamMoi.name} {i}</span>
                                            </Link>
                                            <section>
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                            </section>
                                            <button onClick={add}>add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            </>)
                        })
                    }
                </div>
                <div className="handlePage">
                    <button onClick={pre}>&#10092;</button>
                    <button onClick={next}>&#10093;</button>
                </div>
            </div>

            {/* popular */}
            <div className="block_arrivals">
                <h5>popular</h5>
                <div className="renderProductsArrivals">
                    {
                        dataPagePopular.map((sanPhamMoi, i) => {
                            return (<>

                                <div key={i} className="box_arrivals">
                                    <div className="img">
                                        <Link style={{ width: '100%', height: '100%' }} to={`/products/${sanPhamMoi.id}`}>
                                            <img src={sanPhamMoi.image} alt="" />
                                        </Link>
                                    </div>
                                    {/* -- */}
                                    <div className="inforArrivalsPage">
                                        <div className="element">
                                            <p>${sanPhamMoi.price}</p>
                                            <Link style={{ width: '35%' }} to={`/products/${sanPhamMoi.id}`}>
                                                <span>{sanPhamMoi.name}</span>
                                            </Link>
                                            <section>
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                            </section>
                                            <button onClick={add}>add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            </>)
                        })
                    }
                </div>
                <div className="handlePage">
                    <button onClick={pre}>&#10092;</button>
                    <button onClick={next}>&#10093;</button>
                </div>
            </div>


            {/* Recent */}
            <div className="block_arrivals">
                <h5>Recent</h5>
                <div className="renderProductsArrivals">
                    {
                        dataPageRecent.map((sanPhamMoi, i) => {
                            return (<>

                                <div key={i} className="box_arrivals">
                                    <div className="img">
                                        <Link style={{ width: '100%', height: '100%' }} to={`/products/${sanPhamMoi.id}`}>
                                            <img src={sanPhamMoi.image} alt="" />
                                        </Link>
                                    </div>
                                    {/* -- */}
                                    <div className="inforArrivalsPage">
                                        <div className="element">
                                            <p>${sanPhamMoi.price}</p>
                                            <Link style={{ width: '35%' }} to={`/products/${sanPhamMoi.id}`}>
                                                <span>{sanPhamMoi.name}</span>
                                            </Link>
                                            <section>
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                                <img src="../src/images/star.png" alt="" />
                                            </section>
                                            <button onClick={add}>add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            </>)
                        })
                    }
                </div>
                <div className="handlePage">
                    <button onClick={pre}>&#10092;</button>
                    <button onClick={next}>&#10093;</button>
                </div>
            </div>
        </div>

    </>)
}

export default NewArrivals