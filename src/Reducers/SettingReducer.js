import {InitialState} from "../Store/InitialState";
import {SettingAllowsAction, SettingCheckBoxAction} from "../Store/Actions";

let SettingState = InitialState.settings;

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