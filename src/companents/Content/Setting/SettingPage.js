import settingStyle from './css/setting.module.css'
import SettingWithRouter from "./SettingNav";
import {Route} from "react-router-dom";
import SetNotification from "./setPages/SetNotification";
import SetPassword from "./setPages/SetPassword";
import SetIntegration from "./setPages/SetIntegration";
import SetAccountWithRouter from "./setPages/SetAccountContainer";

function SettingPage(props) {
    return (
        <div className={settingStyle.Container}>
            <div className={settingStyle.podContainer}>
                <div className={settingStyle.nav}>
                    <SettingWithRouter/>
                </div>
                <div className={settingStyle.con}>
                    <Route exact path={['/settings/account', '/settings']}><SetAccountWithRouter
                        actions={props}/></Route>
                    <Route path='/settings/notification'><SetNotification setting={props}/></Route>
                    <Route path='/settings/changePassword'><SetPassword/></Route>
                    <Route path='/settings/integration'><SetIntegration/></Route>
                </div>
            </div>
        </div>
    )
}

export default SettingPage;