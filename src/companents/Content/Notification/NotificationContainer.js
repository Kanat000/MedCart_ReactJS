import {ChangeNoteDoneBtnAC, ChangeSetAsideBtnAC} from "../../../Store/ActionCreator";
import {connect} from "react-redux";
import Notification from "./Notification";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        note: state.noteReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeDoneStatus: (index) => {
            let action = ChangeNoteDoneBtnAC(index)
            dispatch(action)
        },

        changeSetAsideStatus: (index) => {
            let action = ChangeSetAsideBtnAC(index)
            dispatch(action)
        }

    }
}

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification)
const NotificationWithRouter = withRouter(NotificationContainer)
export default NotificationWithRouter