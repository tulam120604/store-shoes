/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom'
import 'E:/Shoes_Store/src/styles/home/popular.css'

import { useEffect, useState } from 'react'
import { getOneProduct } from '../../data/products'

// eslint-disable-next-line no-unused-vars
const PopularComponent = ({ wrapperBg, ProductPage }) => {
    // get one product
    const [oneShoe, setOneShoe] = useState({})
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const data = await getOneProduct(id);
            setOneShoe(data)
        })()
    }, [id])

    const a = [1, 2, 3, 5];

    // theme
    let colorFilter = (wrapperBg.wrapper) ? 'invert(0.3)' : 'invert(0.8)'
    let wrapperProducts = (wrapperBg.wrapper) ? '#C7D4D9' : '#2E2E3F';
    let wrapperImg = (wrapperBg.wrapper) ? '#C7D4D9' : '#214448';
    let wrapperProductsImg = (wrapperBg.wrapper) ? '#E6E9EB' : '#4D4D5A'
    let opacityImg = (wrapperBg.wrapper) ? 'rgba(112, 114, 114, 0.2)' : 'rgba(112, 114, 114, 0.5)'

    // next page
    const [page, setPage] = useState(1);
    if (page < 1) {
        setPage(1)
    }
    if (page > 10) {
        setPage(10)
    }

    // state img 
    // const [img1, setImg1] = useState('../src/images/shoes5.png');
    // const [img2, setImg2] = useState('../src/images/shoes5.png');
    // const [img3, setImg3] = useState('../src/images/shoes5.png');
    // const [img4, setImg4] = useState('../src/images/shoes5.png');


    return (<>
        <div className="popular">
            <h5>popular products</h5>
            <div className="block">
                <div style={{ background: wrapperProducts, transition: '0.2s' }}
                    className="box_element">
                    <p>unique features of leatest & trending products</p>

                    <section>
                        <li>voluptake exerciation incididunt aliquip.</li>
                        <li>voluptake exerciation incididunt aliquip.</li>
                        <li>voluptake exerciation incididunt aliquip.</li>
                        <li>voluptake exerciation incididunt aliquip.</li>
                    </section>
                    <span><h7>{page}</h7>/10</span>
                </div>

                {/* --- */}

                <div style={{ background: wrapperProductsImg, transition: '0.2s' }}
                    className="box_img">
                    <div style={{ background: wrapperImg, transition: '0.2s' }}
                        className="thongtin_sp">
                        <section>
                            {a.map(() => {
                                return (<>
                                    <img style={{ background: opacityImg, transition: '0.2s' }}
                                        src="../src/images/shoes2.png" alt="" />
                                </>)
                            })}
                        </section>
                        <div className="img">
                            <div className='element'>
                                {/* <Link to={`/products/${oneShoe.id}`}>hihihih</Link> */}
                                <img src="../src/images/shoes5.png" alt="" />
                                <span>neki running  <h6>$ 240</h6></span>
                                <button>buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="next-page" >
                <img onClick={() => setPage(page - 1)} style={{ filter: colorFilter, transition: '0.2s' }} src="../src/images/back.png" alt="" />

                <img onClick={() => setPage(page + 1)} style={{ filter: colorFilter, transition: '0.2s' }} src="../src/images/next.png" alt="" />
            </div >
        </div>
    </>)
}

export default PopularComponent