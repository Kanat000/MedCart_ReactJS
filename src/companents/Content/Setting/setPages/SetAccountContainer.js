import {SetAccountInfoAC} from "../../../../Store/ActionCreator";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import SetAccount from "./SetAccount";


let mapStateToProps = (state) => {
    return {
        profile: state.profileReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateProfileInfo: (profile_state) => {
            let action = SetAccountInfoAC(profile_state)
            dispatch(action)
        }

    }
}

const SetAccountContainer = connect(mapStateToProps, mapDispatchToProps)(SetAccount)
const SetAccountWithRouter = withRouter(SetAccountContainer)
export default SetAccountWithRouter