import settingStyle from './css/setting.module.css'
import SettingWithRouter from "./SettingNav";
import {Route} from "react-router-dom";
import SetNotification from "./setPages/SetNotification";
import SetPassword from "./setPages/SetPassword";
import SetIntegration from "./setPages/SetIntegration";
import {useEffect, useState} from "react";
import SetAccount from "./setPages/SetAccount";

function SettingPage(props) {
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        try {
            setTimeout(() => {
                props.getProfileData(props.userId, setLoading)
            }, 1000)
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <div className={settingStyle.Container}>
            <div className={settingStyle.podContainer}>
                <div className={settingStyle.nav}>
                    <SettingWithRouter/>
                </div>
                <div className={settingStyle.con}>
                    <Route exact path={['/settings/account', '/settings']}><SetAccount profile={props.profile}
                                                                                       loading={loading}/></Route>
                    <Route path='/settings/notification'><SetNotification setting={props.settings}
                                                                          setNoteAllow={props.setNoteAllow}
                                                                          setNoteCheckBox={props.setNoteCheckBox}/></Route>
                    <Route path='/settings/changePassword'><SetPassword/></Route>
                    <Route path='/settings/integration'><SetIntegration email={props.profile.data.email}
                                                                        phone={props.profile.data.phoneNumber}
                                                                        loading={loading}/></Route>
                </div>
            </div>
        </div>
    )
}

export default SettingPage;