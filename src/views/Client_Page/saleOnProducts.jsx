/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import '../../styles/Client_Page/saleOnProducts.css'
// eslint-disable-next-line no-unused-vars
const SaleOnProductsPage = ({ wrapperBg }) => {
    let opacityImg = (wrapperBg.wrapper) ? '0.9' : '0.5'
    return (<>
        <div className="popular">
            {/* block 1 */}
            <div className="block1">
                <div style={{ opacity: opacityImg, transition: '0.3s' }} className="ImageSale">
                    <img src="../src/images/popularImg.png" alt="" />
                </div>
                <div className="aboutSaleOnProducts">
                    <h5>save on all products</h5>
                    <span>45% off</span>
                    <p>when you purchase 2 or more items</p>
                    <Link to='/products'>
                        <button>shop now &#8594;</button>
                    </Link>

                </div>
            </div>
        </div>
    </>)
}

export default SaleOnProductsPage