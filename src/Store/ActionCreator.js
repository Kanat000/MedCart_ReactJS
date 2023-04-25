import {
    NoteDoneAction,
    NoteSetAsideAction,
    SettingAccountAction,
    SettingAllowsAction,
    SettingCheckBoxAction
} from "../../src/Store/Actions";

export function ChangeNoteDoneBtnAC(index) {
    return {
        type: NoteDoneAction,
        index: index
    }
}

export function ChangeSetAsideBtnAC(index) {
    return {
        type: NoteSetAsideAction,
        index: index
    }
}

export function SetNoteCheckBoxAC(index) {
    return {
        type: SettingCheckBoxAction,
        index: index
    }
}

export function SetNoteAllowAC(index) {
    return {
        type: SettingAllowsAction,
        index: index
    }
}

export function SetAccountInfoAC(profile) {
    return {
        type: SettingAccountAction,
        profile: profile
    }
}