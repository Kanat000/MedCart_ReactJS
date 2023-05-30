import {GetPatientDataBySearch} from "../Store/Actions";

let CreateState = {
    patients: [{id: '', fullName: ''}],
    loading: true
};

const CreateReducer = (state = CreateState, action) => {
    switch (action.type) {
        case GetPatientDataBySearch:
            return {...state, patients: action.data, loading: false}
        default:
            return state
    }
}
export default CreateReducer