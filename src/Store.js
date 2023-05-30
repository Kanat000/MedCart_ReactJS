import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import HomeReducer from "./Reducers/HomeReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import NoteReducer from "./Reducers/NotificationReducer";
import SettingReducer from "./Reducers/SettingReducer";
import CreateReducer from "./Reducers/CreateReducer";

let reducers = combineReducers({
    homeReducer: HomeReducer,
    profileReducer: ProfileReducer,
    noteReducer: NoteReducer,
    settingReducer: SettingReducer,
    createReducer: CreateReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store