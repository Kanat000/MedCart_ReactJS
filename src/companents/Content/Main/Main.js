import mainStyle from './style/main.module.css'
import {Route} from "react-router-dom";
import NotificationWithRouter from "../Notification/NotificationContainer";
import SettingWithRouter from "../Setting/SettingPageContainer";
import LogOut from "../LogOut/LogOut";
import HomeContainer from "../Home/HomeContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import DoctorProfileContainer from "../Profile/DoctorProfile/DoctorProfileContainer";
import CreateContainer from "../Create/CreateContainer";
import DoctorHistory from "../History/DoctorHistory";
import PatientHistory from "../History/PatientHistory";

let Main = (props) => {
    return (
        <div className={mainStyle.main}>
            <div className={mainStyle.container}>
                <div className={mainStyle.header}><span className={mainStyle.pageName}>
                     <Route path='/h'>Main Page</Route>
                    <Route path='/profile'>Profile Page</Route>
                    <Route path={['/history', '/d/history']}>History Page</Route>
                    <Route path='/d/profile'>Profile Page</Route>
                    <Route path='/d/create'>Record Creation Page</Route>
                    <Route path='/d/calendar'>Calendar Page</Route>
                    <Route path='/notification'>Notification Page</Route>
                    <Route path='/settings'>Setting Page</Route>
                </span></div>
                <div className={mainStyle.content}>
                    <Route path='/h'><HomeContainer/></Route>
                    <Route path='/profile'><ProfileContainer fromPath={false}/></Route>
                    <Route path='/patientProfile'><ProfileContainer fromPath={true}/></Route>
                    <Route path='/history'><PatientHistory/></Route>
                    <Route path='/d/profile'><DoctorProfileContainer fromPath={false}/></Route>
                    <Route path='/doctorProfile'><DoctorProfileContainer fromPath={true}/></Route>
                    <Route path='/d/create'><CreateContainer/></Route>
                    <Route path='/d/history'><DoctorHistory/></Route>
                    <Route path='/notification'><NotificationWithRouter/></Route>
                    <Route path='/settings'><SettingWithRouter/></Route>
                    <Route path='/logOut'><LogOut/></Route>
                </div>
            </div>
        </div>
    )
}

export default Main;