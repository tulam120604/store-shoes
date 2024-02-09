/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Client_Page/baner.css'

const BanerComponent = ({ BannerBg, ProductsBaner }) => {
    let bg = (BannerBg.BgColor) ? '#ECECEC' : ' #0F222B'
    let bg2 = (BannerBg.BgColor) ? '#C7D4D9' : '  rgb(247, 245, 217)'

    const hotProductsbaner = ProductsBaner.filter((item) => {
        if (item.new === 1) {
            return item
        }
    })

    // phan page baner
    const baner1 = []
    const loadItemBaner = () => {
        hotProductsbaner.forEach((item, index) => {
            if (index === 1) {
                baner1.push(hotProductsbaner[index])
                // console.log(hotProductsbaner[index]);
            }
        });
    }
    loadItemBaner()

    // tong so luong page baner
    const count = Math.ceil(hotProductsbaner.length / baner1.length);
    const countBaner = []
    for (let i = 0; i < count; i++) {
        countBaner.push(i)
    }


    return (<>


        <div className="baner">
            {baner1.map((item, index) => {
                return (<>
                    <div key={index} className="block" style={{ background: bg, transition: '0.2s' }}>
                        <button></button>
                        <div className="name">
                            <section>
                                <span>{item.name}</span>
                            </section>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sapiente magnam provident delectus, in minima harum.</p>
                            <Link to={`/products/${item.id}`}><button>explore</button></Link>
                        </div>
                        {/* ---- */}
                        <div className="box-img" style={{ background: bg2, transition: '0.2s' }}>
                            <img src={item.image} alt="" />
                            <div className="bg"></div>
                        </div>
                    </div>
                </>)
            })}

            {/* ---- */}
            <div className="count_page">
                {
                    countBaner.map((e, index) => {
                        const aler = () => {
                            console.log('da click' + e);
                        }
                        return (<>
                            <section key={index} onClick={aler}></section>
                        </>)
                    })
                }
            </div>
        </div>

    </>)
}

export default BanerComponent