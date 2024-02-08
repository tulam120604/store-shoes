/* eslint-disable react/prop-types */
// import React from 'react'
import { Outlet } from "react-router-dom"
import HeaderComponent from "./header"
import FooterComponent from "./Client_Page/footer"

const ClientPage = ({ themeBg }) => {
    return (
        <>
            {/* header */}
            <HeaderComponent
                themeBg={themeBg} />

            {/* main */}
            <main style={{ width: '80%' }}>
                {/* <IndexComponent
                    themeBg={themeBg}
                    sanpham={sanpham}
                    danhmuc={danhmuc} /> */}
                <Outlet />

            </main>

            {/* footer */}
            <FooterComponent />

        </>
    )
}

export default ClientPage