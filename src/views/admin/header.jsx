/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HeaderAdmin = ({ bgHeader }) => {
    let headerColor;
    if (bgHeader.Bground) {
        headerColor = '#ECECEC';
    }
    else {
        headerColor = '#222626'
    }
    return (<>
        <div style={{ background: headerColor, transition: '0.5s' }} className="header">
            <header style={{ background: headerColor, transition: '0.5s' }}>
                <div className="logo">
                    <Link to='/'><span>neki</span></Link>
                </div>

                <div className="menu">
                    <li>{bgHeader.themeHeader}</li>
                    <li>xin chao admin</li>
                </div>
            </header>
            {/* Router */}
        </div>
    </>);
}

export default HeaderAdmin;