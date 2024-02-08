/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./admin/header";
import NavBarAdmin from "./admin/navBar";
import FooterAdmin from "./admin/footer";

const AdminStrationsPage = ({ themeBg, listMenu }) => {
    let navbarColor;
    if (themeBg.Bg_Color) {
        navbarColor = '#ECECEC';
    }
    else {
        navbarColor = '#343A40'
    }
    return (<>
        <HeaderAdmin
            themeBg={themeBg}
            listMenu={listMenu} />

        <div className="main">
            <div style={{ background: navbarColor, transition: '0.5s' }} className="navbarMenu">
                <div className="navbarAdmin">
                    <NavBarAdmin
                        themeBg={themeBg.Bg_Color}
                        listMenu={listMenu}
                    />
                </div>

                {/* <div className="homeAdmin">
                <ThongKe />
            </div> */}
            </div>

            {/* dashboard */}
            <div className="mainAdmin">
                <Outlet />
            </div>
        </div>
        <FooterAdmin />
    </>);
}

export default AdminStrationsPage;