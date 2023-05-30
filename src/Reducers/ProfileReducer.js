import {
    GetDoctorReviewAction,
    GetPatientRecord,
    GetProfileDataAction,
    SetNothingProfile,
    SettingAccountAction
} from "../Store/Actions";

let ProfileState = {
    data: {},
    record: [],
    review: []
};

const ProfileReducer = (state = ProfileState, action) => {
    switch (action.type) {
        case SettingAccountAction:
            return {...state}
        case GetProfileDataAction:
            return {...state, data: action.data}
        case GetPatientRecord:
            return {...state, record: action.data}
        case GetDoctorReviewAction:
            return {...state, review: action.data}
        case SetNothingProfile:
            return {...state}
        default:
            return state
    }
}

export default ProfileReducer