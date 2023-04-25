import {InitialState} from "../Store/InitialState";
import {NoteDoneAction, NoteSetAsideAction} from "../Store/Actions";

let NoteState = InitialState.notification;

const NoteReducer = (state = NoteState, action) => {
    let stateCp = [...state]
    stateCp[action.index] = {...state[action.index]}
    switch (action.type) {
        case NoteDoneAction:
            stateCp[action.index].done = true
            break;
        case NoteSetAsideAction:
            stateCp[action.index].feedback = false
            stateCp[action.index].done = false
            break;
        default:
            break;
    }
    return stateCp
}
export default NoteReducer