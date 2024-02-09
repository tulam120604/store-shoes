import { Link } from 'react-router-dom'
import '../../styles/Client_Page/cart.css'

const Cart_Page = () => {
    return (<>
        <div className="card_page">
            <div className="row">
                <div className="col-md-8 card_page">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center">3 items</div>
                        </div>
                    </div>
                    <div className="row main align-items-center border-bottom">
                        <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div>
                        <div className="col">
                            <div className="row">Shirt</div>
                            <div className="row">Cotton T-shirt</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col flex">€ 44.00 <span className="close">✕</span></div>
                    </div>
                    <div className="row ">
                        <div className="row main align-items-center border-bottom">
                            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" /></div>
                            <div className="col">
                                <div className="row">Shirt</div>
                                <div className="row">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col flex">€ 44.00 <span className="close">✕</span></div>
                        </div>
                    </div>
                    <div className="row main align-items-center border-bottom">
                        <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg" /></div>
                        <div className="col">
                            <div className="row">Shirt</div>
                            <div className="row">Cotton T-shirt</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col flex">€ 44.00 <span className="close">✕</span></div>
                    </div>
                    <Link to="/products"><button className="back-to-shop">←<span>Back to shop</span></button></Link>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{ paddingLeft: 0 }}>ITEMS 3</div>
                        <div className="col text-right">€ 132.00</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option>Standard-Delivery- €5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                    <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">€ 137.00</div>
                    </div>
                    <button className="btn uppercase">buy now</button>
                </div>
            </div>
        </div>

    </>)
}

export default Cart_Page