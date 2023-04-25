import {combineReducers, legacy_createStore} from 'redux'
import HomeReducer from "./Reducers/HomeReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import NoteReducer from "./Reducers/NotificationReducer";
import SettingReducer from "./Reducers/SettingReducer";

let reducers = combineReducers({
    homeReducer: HomeReducer,
    profileReducer: ProfileReducer,
    noteReducer: NoteReducer,
    settingReducer: SettingReducer
})

let store = legacy_createStore(reducers)

export default store