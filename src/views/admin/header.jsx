/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import 'E:/Shoes_Store/src/styles/admin/dashboard.css'


const HeaderAdmin = ({ themeBg }) => {
    let headerColor;
    if (themeBg.Bg_Color) {
        headerColor = '#ECECEC';
    }
    else {
        headerColor = '#343A40'
    }
    return (<>
        <div style={{ background: headerColor, transition: '0.5s' }} className="HeaderAdmin">
            <header>
                <div className="logo">
                    <Link to='/'><span>neki</span></Link>
                </div>

                <div className="menu">
                    <li>{themeBg.switch}</li>
                    <li>xin chao admin</li>
                </div>
            </header>
        </div>

    </>);
}

export default HeaderAdmin;