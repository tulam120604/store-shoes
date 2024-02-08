/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavBarAdmin = ({ listMenu }) => {


    // const stroke = (themeNavBar) ? 'black' : 'white';
    return (<>
        <div className="navbarAdmin">
            {listMenu?.map((list, i) => {
                return (<>
                    <li key={i}>
                        <Link to={list.path}>
                            {list.name}
                        </Link> </li>
                </>)
            })}
        </div>
    </>);
}

export default NavBarAdmin;