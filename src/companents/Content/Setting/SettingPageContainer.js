import {GetProfileDataAC, getUserId, SetNoteAllowAC, SetNoteCheckBoxAC} from "../../../Store/ActionCreator";
import {connect} from "react-redux";
import SettingPage from "./SettingPage";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        settings: state.settingReducer,
        profile: state.profileReducer,
        userId: getUserId(),
        loading: true
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getProfileData: (userId, setLoading) => {
            dispatch(GetProfileDataAC(userId, setLoading))
        },

        setNoteCheckBox: (index) => {
            dispatch(SetNoteCheckBoxAC(index))
        },

        setNoteAllow: (index) => {
            dispatch(SetNoteAllowAC(index))
        }

    }
}

const SettingPageContainer = connect(mapStateToProps, mapDispatchToProps)(SettingPage)
const SettingWithRouter = withRouter(SettingPageContainer)
export default SettingWithRouter