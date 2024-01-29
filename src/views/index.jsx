/* eslint-disable react/prop-types */
// import React from 'react'
import BanerComponent from "./home/baner"
import BodyComponent from "./home/body"
import NewArrivals from "./home/newArrivals"
import PopularComponent from "./home/popular"

const Index = ({ themeBg, sanpham, danhmuc }) => {
    // console.log(danhmuc);
    return (
        <>
            < BanerComponent />
            < BodyComponent
                wrapperBg={{
                    wrapper: themeBg.Bg_Color
                }}
                ProductPage={sanpham}
                CateloriesHomePage={danhmuc}
            />

            < PopularComponent
                wrapperBg={{
                    wrapper: themeBg.Bg_Color
                }}
                ProductPage={sanpham}
            />

            < NewArrivals
                wrapperBg={{
                    wrapper: themeBg.Bg_Color
                }}
                ProductPage={sanpham}
            />
        </>
    )
}

export default Index