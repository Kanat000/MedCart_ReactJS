import {GetPatientHomeDataAction} from "../Store/Actions";

let HomeState = {
    data: {
        doctors: [],
        clinics: [],
        medicament: [],
        pharmacies: []
    },
    loading: true
};

const HomeReducer = (state = HomeState, action) => {
    switch (action.type) {
        case GetPatientHomeDataAction:
            return {...state, data: action.data, loading: false}
        default:
            return state
    }
}
export default HomeReducer