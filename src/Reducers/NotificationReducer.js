// import {InitialState} from "../Store/InitialState";
import {GetNotificationDataAction} from "../Store/Actions";

let NoteState = {
    data: []
};

const NoteReducer = (state = NoteState, action) => {
    // stateCp[action.index] = {...state[action.index]}
    switch (action.type) {
        // case NoteDoneAction:
        //     stateCp[action.index].done = true
        //     break;
        // case NoteSetAsideAction:
        //     stateCp[action.index].feedback = false
        //     stateCp[action.index].done = false
        //     break;
        case GetNotificationDataAction:
            return {...state, data: action.data}
        default:
            return {...state};
    }
}
export default NoteReducer