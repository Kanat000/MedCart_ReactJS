import {GetDoctorReviewsAC, GetProfileDataAC, getUserId} from "../../../../Store/ActionCreator";
import {connect} from "react-redux";
import DoctorProfile from "./DoctorProfile";

let mapStateToProps = (state, props) => {
    let doctor_id = props.fromPath ? parseInt(window.location.pathname.split('/')[2]) : getUserId()
    return {
        profile: state.profileReducer,
        doctorId: doctor_id
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (doctorId, setLoading) => {
            let action = GetProfileDataAC(doctorId, setLoading)
            dispatch(action)
        },
        getDoctorReviews: (userId) => {
            let action = GetDoctorReviewsAC(userId)
            dispatch(action)
        }
    }
}

const DoctorProfileContainer = connect(mapStateToProps, mapDispatchToProps)(DoctorProfile)
export default DoctorProfileContainer