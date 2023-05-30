import {SettingAllowsAction, SettingCheckBoxAction} from "../Store/Actions";

let SettingState = {
    notifications: [
        {name: 'Drug time', checked: true},
        {name: 'About created records', checked: false},
        {name: 'Doctor recommends', checked: true},
        {name: 'Doctor\'s appointment time', checked: true},
        {name: 'About my plans', checked: true},
        {name: 'News and Updates', checked: false},
        {name: 'Reminders', checked: false}
    ],
    allows: [
        {name: 'Allow Sound', switch_name: 'allow_sound', switch: false},
        {name: 'Allow Vibration', switch_name: 'allow_vib', switch: true},
        {name: 'Email Notification', switch_name: 'email_note', switch: false},
        {name: 'Send message to phone number', switch_name: 'phone_note', switch: true},
        {name: 'Allow Adds', switch_name: 'allow_add', switch: false}
    ]
};

const SettingReducer = (state = SettingState, action) => {
    let stateCp = {...state}
    stateCp.notifications = [...state.notifications]
    stateCp.allows = [...state.allows]
    switch (action.type) {
        case SettingCheckBoxAction:
            stateCp.notifications[action.index].checked = !stateCp.notifications[action.index].checked
            break;
        case SettingAllowsAction:
            stateCp.allows[action.index].switch = !stateCp.allows[action.index].switch
            break;
        default:
            break;
    }
    return stateCp
}
export default SettingReducer