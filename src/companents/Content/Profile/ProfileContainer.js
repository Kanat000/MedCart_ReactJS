import {GetPatientRecordAC, GetProfileDataAC, getUserId} from "../../../Store/ActionCreator";
import {connect} from "react-redux";
import Profile from "./Profile";

let mapStateToProps = (state, props) => {
    let user_id = props.fromPath ? parseInt(window.location.pathname.split('/')[2]) : getUserId()
    return {
        profile: state.profileReducer,
        userId: user_id
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (userId, setLoading) => {
            let action = GetProfileDataAC(userId, setLoading)
            dispatch(action)
        },
        getPatientRecord: (userId) => {
            let action = GetPatientRecordAC(userId)
            dispatch(action)
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer