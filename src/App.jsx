
import { useEffect, useState } from 'react'
import './App.css'
import Index from './views'
import HeaderComponent from "../src/views/home/header"
import { getProducts } from './data/products'
import { getDanhMuc } from './data/danh_muc'


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
  return (
    <>
      <div style={{ background: theme ? 'white' : '#191919', color: theme ? 'black' : 'white', transition: '0.5s' }}
        className="body">

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

        <div style={{ background: theme ? 'white' : '#191919', color: theme ? 'black' : 'white', transition: '0.5s' }}
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
        </div>

      </div>
    </>
  )
}

export default App
