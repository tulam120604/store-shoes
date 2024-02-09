import { useEffect, useState } from 'react'
import './App.css'
import { delete_danhMuc, getDanhMuc } from './data/danh_muc'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './views/products/allProducts'
import { addProductsAll, deleteProductsAll, getAllProducts, updateProductsAll } from './data/productAll'
import OneProductsComponent from './views/products/oneProducts'
import AllProductsAdmin from './views/admin/allProducts'
import AddProductComponent from './views/admin/addProducts'
import ListMenuNavBarAdmin from './data/navBarAdmin'
import ThongKe from './views/admin/dashBoardAdmin'
import ClientPage from './views/ClientPage'
import IndexComponent from './views/Client_Page'
import AdminStrationsPage from './views/AdminStrations'
import EditProductAdmin from './views/admin/editProduct'
import AllCatelories from './views/admin/allCatelories'
import Cart_Page from './views/Client_Page/cart'
import ThanhToan_Page from './views/Client_Page/thanhToan'
import Login_Page from './views/Client_Page/login'


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

  // delete danh muc :
  const hanldeRemoveCatelories = async (id_dm) => {
    const confirmRemove = window.confirm('Confirm delete ?')
    if (confirmRemove) {
      await delete_danhMuc(id_dm)
      const renderCatelories = danhMuc.filter((i) => i.id !== id_dm)
      setDanhMuc(renderCatelories)
      alert('success')
    }
  }


  // get products
  const [allProducts, setAllProducts] = useState([]);
  const getAllSanPham = () => {
    (async () => {
      const data_AllSanPham = await getAllProducts();
      // console.log(data_AllSanPham);
      setAllProducts(data_AllSanPham)
    })()
  }
  useEffect(getAllSanPham, [])

  //  lay 1 san pham


  // remove product
  const onHandleRemove = async (id) => {
    const confirmDelete = window.confirm('Confirm Delete Product')
    if (confirmDelete) {
      await deleteProductsAll(id)
      const reRenderSpAll = allProducts.filter((spReRender) => spReRender.id !== id)
      setAllProducts(reRenderSpAll)
      alert('thanh cong')
    }
  }

  //  them san pham 
  const hanldeAddSP = async (san_pham_moi) => {
    try {
      const data = await addProductsAll(san_pham_moi);
      alert('them san pham thanh cong')
      setAllProducts([...allProducts, data])
    } catch (error) {
      console.log(error);
    }
  }

  // update san pham
  const handleUpdateSP = async (sanPhamSua) => {
    try {
      await updateProductsAll(sanPhamSua)
      const newProductsUpdate = allProducts.map((e) => (e.id === sanPhamSua.id) ? sanPhamSua : e)
      setAllProducts(newProductsUpdate)
      alert('sua thanh cong')

    } catch (error) {
      console.log(error);
    }
  }

  // loc san pham hot:
  const SP_hot = allProducts.filter((hot) => {
    if ((hot.new === 1) || (hot.new === 2)) {
      return hot
    }
  })

  // menu navbar admin
  const [menuNavbarAdmin, setMenuNavbarAdmin] = useState([])
  const getNavBarAdmin = () => {
    (async () => {
      const dataNavBar = await ListMenuNavBarAdmin();
      setMenuNavbarAdmin(dataNavBar)
    })()
  }

  // them san pham vao gio hang
  const addProductsToCart = () => {
    alert(123)
  }
  useEffect(getNavBarAdmin, [])
  return (
    <>
      <div style={{ background: theme ? 'white' : '#191919', color: theme ? 'black' : 'white', transition: '0.5s' }}
        className="body">

        {/* ------------------CLIENT PAGE------------------ */}
        <Routes>
          <Route path='/' element={<ClientPage
            themeBg={{
              switch:
                <img style={{ filter: theme ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)' }}
                  onClick={switchTheme} src="../src/images/sun.png" alt="" />,
              Bg_Color: theme
            }}
            // product :
            sanpham={allProducts}
            danhmuc={danhMuc}
          />}>
            {/* HOME PAGE */}
            <Route index element={<IndexComponent
              themeBg={{
                switch:
                  <img style={{ filter: theme ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)' }}
                    onClick={switchTheme} src="../src/images/sun.png" alt="" />,
                Bg_Color: theme
              }}
              // PRODUCTS PAGE:
              sanpham={allProducts}
              danhmuc={danhMuc} />}
              addToApp={addProductsToCart}
            />
            {/* PRODUCTS PAGE */}
            <Route path='products' element={<AllProducts
              wrapper={theme}
              all_san_pham={allProducts}
            />} />

            {/* chi tiet san pham */}
            <Route path='products/:id' element={<OneProductsComponent
              wrapper={theme}
            />} />

            {/* cart page */}
            <Route path='cart' element={<Cart_Page />} />

            {/* thanh toan page */}
            <Route path='thanh_toan' element={<ThanhToan_Page />} />

            {/* login */}
            <Route path='login' element={<Login_Page />} />
          </Route>


          {/* ----------------- */}

          {/* ----- */}
          {/* ADMIN */}
          <Route path='admin' element={<AdminStrationsPage
            themeBg={{
              switch:
                <img style={{ filter: theme ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)' }}
                  onClick={switchTheme} src="../src/images/sun.png" alt="" />,
              Bg_Color: theme
            }}
            listMenu={menuNavbarAdmin}
          />} >
            <Route index element={<ThongKe
            />} />

            {/* admin/ products */}
            <Route path='products-manager' element={<AllProductsAdmin
              SP={{
                hot: SP_hot,
                all: allProducts
              }}
              onRemove={onHandleRemove}
            />} />

            {/* admin/product/add */}
            <Route path='products-manager/addProducts' element={<AddProductComponent
              onAddProduct={hanldeAddSP} />} />

            {/* admin/ product/edit product */}
            <Route path='products-manager/:id/edit_product' element={<EditProductAdmin
              onUpdateProduct={handleUpdateSP}
            />} />

            {/* admin/danh muc: */}
            <Route path='catelories-manager' element={<AllCatelories
              catelories={danhMuc}
              onRemove={hanldeRemoveCatelories}
            />} />
          </Route>
        </Routes>

        {/* ------------------FOOTER------------------ */}
      </div>
    </>
  )
}

export default App
