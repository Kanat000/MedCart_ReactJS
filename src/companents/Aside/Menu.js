import menuStyle from './style/menu.module.css'
import {Link, withRouter} from "react-router-dom";
import {menuArr} from "./MenuArr";

let Menu = (props) => {
    let location = props.history.location
    let arr = JSON.parse(localStorage.getItem('user')).role === 2 ? menuArr.patient : menuArr.doctor
    let nav = arr.map((menu) => {
        let itemNum = location.pathname.split('/')[1] === 'd' ? 2 : 1
        return <Link to={menu.link}>
            <li className={[menuStyle.item, location.pathname.split('/')[itemNum] === menu.link.split('/')[itemNum] ? menuStyle.active : ''].join(' ')}>
                <div></div>
                <div>
                    {menu.icon}
                </div>
                <div className={menuStyle.itemName}>{menu.name}</div>
                <div></div>
            </li>
        </Link>
    })
    return (
        <div className={menuStyle.menu}>
            <ul className={menuStyle.list}>
                {nav}
            </ul>
        </div>
    )
}

let MenuWithRouter = withRouter(Menu)

export default MenuWithRouter