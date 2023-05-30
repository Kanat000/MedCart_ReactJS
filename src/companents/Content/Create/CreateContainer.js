import {GetPatientDataBySearchAC} from "../../../Store/ActionCreator";
import {connect} from "react-redux";
import Create from "./Create";


let mapStateToProps = (state) => {
    return {
        patients: state.createReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getPatientBySearch: () => {
            let action = GetPatientDataBySearchAC()
            dispatch(action)
        }
    }
}

const CreateContainer = connect(mapStateToProps, mapDispatchToProps)(Create)
export default CreateContainer;