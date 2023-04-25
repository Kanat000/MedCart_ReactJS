import {SetNoteAllowAC, SetNoteCheckBoxAC} from "../../../Store/ActionCreator";
import {connect} from "react-redux";
import SettingPage from "./SettingPage";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        settings: state.settingReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNoteCheckBox: (index) => {
            let action = SetNoteCheckBoxAC(index)
            dispatch(action)
        },

        setNoteAllow: (index) => {
            let action = SetNoteAllowAC(index)
            dispatch(action)
        }

    }
}

const SettingPageContainer = connect(mapStateToProps, mapDispatchToProps)(SettingPage)
const SettingWithRouter = withRouter(SettingPageContainer)
export default SettingWithRouter