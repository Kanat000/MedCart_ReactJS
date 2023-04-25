import settingStyle from './css/setting.module.css'
import {Link, withRouter} from "react-router-dom";
import {SettingMenuArr} from "./SettingMenuArr";


function SettingNav(props) {
    let location = props.location
    let listArr = SettingMenuArr.map((item) => {
        return <li
            className={[settingStyle.setMenuItem, location.pathname === item.link ? settingStyle.active : ''].join(' ')}>
            <Link
                to={item.link}>{item.name}</Link></li>
    })
    return (
        <div className={settingStyle.setMenuBlock}>
            <ul className={settingStyle.setMenu}>
                {listArr}
            </ul>

        </div>
    )
}

let SettingNavWithRouter = withRouter(SettingNav)
export default SettingNavWithRouter;