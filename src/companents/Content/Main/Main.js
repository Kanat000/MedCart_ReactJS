import mainStyle from './style/main.module.css'
import {Route} from "react-router-dom";
import Profile from "../Profile/Profile";
import DoctorProfile from "../Profile/DoctorProfile/DoctorProfile";
import Create from "../Create/Create";
import CalendarPage from "../Calendar/CalendarPage";
import NotificationWithRouter from "../Notification/NotificationContainer";
import Home from "../Home/Home";
import SettingWithRouter from "../Setting/SettingPageContainer";
import LogOut from "../LogOut/LogOut";

let Main = () => {
    return (
        <div className={mainStyle.main}>
            <div className={mainStyle.container}>
                <div className={mainStyle.header}><span className={mainStyle.pageName}>Profile</span></div>
                <div className={mainStyle.content}>
                    <Route path='/h'><Home/></Route>
                    <Route path='/profile'><Profile/></Route>
                    <Route path='/d/profile'><DoctorProfile/></Route>
                    <Route path='/d/create'><Create/></Route>
                    <Route path='/d/calendar'><CalendarPage/></Route>
                    <Route path='/notification'><NotificationWithRouter/></Route>
                    <Route path='/settings'><SettingWithRouter/></Route>
                    <Route path='/logOut'><LogOut/></Route>
                </div>
            </div>
        </div>
    )
}

export default Main;