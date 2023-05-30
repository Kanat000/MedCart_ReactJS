import navBarStyle from './style/navbar.module.css'
import {Link} from "react-router-dom";
import {menuItems} from "./NavJson";
import {useLocation} from "react-router-dom/cjs/react-router-dom";


function NavBar(props) {
    let location = useLocation()
    let initialNavs = JSON.parse(localStorage.getItem('user')).role === 2 ? menuItems.patientInitial : menuItems.doctorInitial;
    let navs = initialNavs.map((m, index) => {
        return (
            <Link to={m.link}>
                <div className={location.pathname === m.link ? navBarStyle.active : ''}>{m.name}</div>
            </Link>
        )
    })
    navs.push(menuItems.commonLinks.map((m, index) => {
        return (
            <Link to={m.link}>
                <div className={location.pathname === m.link ? navBarStyle.active : ''}>{m.name}</div>
            </Link>
        )
    }))

    return (
        <div className={navBarStyle.container}>
            {navs}
        </div>
    )
}

export default NavBar;