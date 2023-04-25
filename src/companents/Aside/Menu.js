import menuStyle from './style/menu.module.css'
import {Link, withRouter} from "react-router-dom";
import {menuArr} from "./MenuArr";

let Menu = (props) => {
    let location = props.history.location
    let nav = menuArr.map((menu) => {
        return <Link to={menu.link}>
            <li className={[menuStyle.item, location.pathname.split('/')[1] === menu.link.split('/')[1] ? menuStyle.active : ''].join(' ')}>
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