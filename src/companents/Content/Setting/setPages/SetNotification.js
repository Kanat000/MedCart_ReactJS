import setNotificationStyle from '../css/setnotification.module.css'
import NoteCheckBoxBlock from "./NoteCheckBoxBlock";
import NoteSwitchBlock from "./NoteSwitchBlock";

function SetNotification(props) {
    let noteChecks = props.setting.settings.notifications.map((n, index) => {
        return <NoteCheckBoxBlock note={n} index={index} setNoteCheckBox={props.setting.setNoteCheckBox}/>
    })
    let allowSwitch = props.setting.settings.allows.map((allow, index) => {
        return <NoteSwitchBlock allow={allow} index={index} setNoteAllow={props.setting.setNoteAllow}/>
    })
    return (
        <div className={setNotificationStyle.container}>
            <div className={setNotificationStyle.checkBoxContainer}>
                <div className={setNotificationStyle.frame}>
                    {noteChecks}
                </div>
            </div>
            <div className={setNotificationStyle.switchContainer}>
                <div className={setNotificationStyle.frame}>
                    {allowSwitch}
                </div>
            </div>
        </div>
    )

}

export default SetNotification;