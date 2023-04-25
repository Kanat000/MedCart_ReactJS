import {InitialState} from "../Store/InitialState";
import {SettingAccountAction} from "../Store/Actions";

let ProfileState = InitialState.profile;

const ProfileReducer = (state = ProfileState, action) => {
    let stateCp = {...state}
    switch (action.type) {
        case SettingAccountAction:
            stateCp = action.profile
            break;
        default:
            break;
    }
    return stateCp
}

export default ProfileReducer