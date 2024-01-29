import { useEffect, useState } from 'react'
import Index from './views'
import './App.css'
import HeaderComponent from "./views/header"
import { getProducts } from './data/products'
import { getDanhMuc } from './data/danh_muc'
import FooterComponent from './views/home/footer'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './views/products/allProducts'
import { getAllProducts } from './data/productAll'
import OneProductsComponent from './views/products/oneProducts'
import Dashboard from './views/admin/home'


function App() {
  // switch theme page
  const [theme, setTheme] = useState(false)
  const switchTheme = () => {
    if (theme) {
      setTheme(false)
    }
    else {
      setTheme(true)
    }
  }


  //get products :
  const [products, setProducts] = useState([]);
  const laySanPham = () => {
    (async () => {
      const data = await getProducts();
      // console.log(data);
      setProducts(data)
    })()
  }
  useEffect(laySanPham, []) //  dieu kien ([]) tranh lap vo han, treo page

  // get danh muc:
  const [danhMuc, setDanhMuc] = useState([])
  const layDanhMuc = () => {
    (async () => {
      const data_Danhmuc = await getDanhMuc();
      // console.log(data_Danhmuc);
      setDanhMuc(data_Danhmuc)
    })()
  }
  // dung useEffect
  useEffect(layDanhMuc, [])


  // lay toan bo san pham 
  const [allSanPham, setAllSanPham] = useState([]);
  const layAllSanPham = () => {
    (async () => {
      const data_AllSanPham = await getAllProducts();
      // console.log(data_AllSanPham);
      setAllSanPham(data_AllSanPham)
    })()
  }
  useEffect(layAllSanPham, [])

  //  lay 1 san pham
  return (
    <>
      <div style={{ background: theme ? 'white' : '#191919', color: theme ? 'black' : 'white', transition: '0.5s' }}
        className="body">
        {/* ------------------HEADER */}
        <div style={{ background: theme ? '#ECECEC' : '#222626', color: theme ? 'black' : 'white', transition: '0.5s', position: 'fixed', zIndex: '10' }}
          className="headerBox">
          < HeaderComponent
            themeBg={{
              switch:
                <img style={{ filter: theme ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)' }}
                  onClick={switchTheme} src="../src/images/sun.png" alt="" />,
              Bg_Color: theme
            }}
          />
        </div>

        {/* ------------------INDEX------------------ */}
        <Routes>
          <Route path='/' element={<div style={{ background: theme ? 'white' : '#191919', color: theme ? 'black' : 'white', transition: '0.5s' }}
            className="fa_container">
            <Index
              themeBg={{
                switch:
                  <img style={{ filter: theme ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)' }}
                    onClick={switchTheme} src="../src/images/sun.png" alt="" />,
                Bg_Color: theme
              }}
              // product :
              sanpham={products}
              danhmuc={danhMuc}
            />
          </div>} />
          <Route path='products' element={<AllProducts
            wrapper={theme}
            all_san_pham={allSanPham}
          />} />

          {/* chi tiet san pham */}
          <Route path='products/:id' element={<OneProductsComponent
            wrapper={theme}
          />} />

          {/* admin */}
          <Route path='admin/' element={<Dashboard
            themeBg={{
              switch:
                <img style={{ filter: theme ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)' }}
                  onClick={switchTheme} src="../src/images/sun.png" alt="" />,
              Bg_Color: theme
            }}

          />} />
        </Routes>

        {/* ------------------FOOTER------------------ */}
        < FooterComponent />
      </div>
    </>
  )
}

export default App
