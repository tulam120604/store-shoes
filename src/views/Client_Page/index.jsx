/* eslint-disable react/prop-types */

import BanerComponent from './baner'
import FeaturedPage from './featuredPage'
import SaleOnProductsPage from './saleOnProducts'
import NewArrivals from './Arrivals'

const IndexComponent = ({ themeBg, sanpham, danhmuc, addToApp }) => {
    return (<>
        < BanerComponent
            BannerBg={{
                BgColor: themeBg.Bg_Color,
            }}
            ProductsBaner={sanpham}
        />
        < FeaturedPage
            wrapperBg={{
                wrapper: themeBg.Bg_Color
            }}
            ProductPage={sanpham}
            CateloriesHomePage={danhmuc}
        />

        < SaleOnProductsPage
            wrapperBg={{
                wrapper: themeBg.Bg_Color
            }}
        // ProductPage={sanpham}
        />

        < NewArrivals
            wrapperBg={{
                wrapper: themeBg.Bg_Color
            }}
            ProductPage={sanpham}
            add={addToApp}
        />
    </>)
}

export default IndexComponent