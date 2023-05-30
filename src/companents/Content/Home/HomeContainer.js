import Home from "./Home";
import {GetPatientHomeDataAC} from "../../../Store/ActionCreator";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        home: state.homeReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getPatientHomeData: (search) => {
            let action = GetPatientHomeDataAC(search)
            dispatch(action)
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer;