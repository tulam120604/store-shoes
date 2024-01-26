import 'E:/Shoes_Store/src/styles/home/popular.css'

import React from 'react'

const PopularComponent = ({ wrapperBg, ProductPage, CateloriesHomePage }) => {

    let colorFilter = (wrapperBg.wrapper) ? 'invert(0.3)' : 'invert(0.8)'

    let wrapperProducts = (wrapperBg.wrapper) ? '#C7D4D9' : '#2E2E3F';
    let wrapperImg = (wrapperBg.wrapper) ? '#C7D4D9' : '#4D4D5A';
    let wrapperProductsImg = (wrapperBg.wrapper) ? '#E6E9EB' : '#4D4D5A'


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
                </div>

                {/* --- */}

                <div style={{ background: wrapperImg, transition: '0.2s' }}
                    className="box_img">
                    <section>
                        <img src="../src/images/shoes2.png" alt="" />
                        <img src="../src/images/shoes2.png" alt="" />
                        <img src="../src/images/shoes2.png" alt="" />
                        <img src="../src/images/shoes2.png" alt="" />
                    </section>
                    <div className="img">
                        <div className='element'>
                            <img src="../src/images/shoes5.png" alt="" />
                            <span>neki running</span>
                            <button>buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default PopularComponent