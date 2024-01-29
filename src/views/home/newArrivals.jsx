/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import 'E:/Shoes_Store/src/styles/home/newArrivals.css'
import { Link, useParams } from 'react-router-dom'
import { getOneProduct } from '../../data/products'


const NewArrivals = ({ wrapperBg, ProductPage }) => {
    // loc san pham moi nhat
    const newProducts = ProductPage.filter((e) => {
        if (e.new === true) {
            return e
        }
    })

    // lay san pham = id
    const [oneNewProduct, setOneNewProduct] = useState({})
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const data = await getOneProduct(id);
            setOneNewProduct(data);
        })()
    }, [id])

    return (<>
        <div className="Arrivals">
            <h5>new arrivals</h5>
            <div className="block_arrivals">
                {
                    newProducts.map((sanPhamMoi, i) => {
                        return (<>
                            <Link to={`/products/${sanPhamMoi.id}`}>
                                <div key={i} className="box_arrivals">
                                    <div className="infor">
                                        <div className="element">

                                            <span>{sanPhamMoi.name}</span>
                                            <p>{sanPhamMoi.title}</p>
                                            <section>{sanPhamMoi.feedback} | <img src="../src/images/star.png" alt="" /></section>
                                            <button>explore</button>
                                        </div>
                                    </div>
                                    {/* -- */}
                                    <div className="img">
                                        <img src={sanPhamMoi.image} alt="" />
                                    </div>
                                </div>
                            </Link>
                        </>)
                    })
                }
            </div>
        </div>

    </>)
}

export default NewArrivals