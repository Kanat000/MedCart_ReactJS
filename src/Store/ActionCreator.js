import {
    GetDoctorReviewAction,
    GetNotificationDataAction,
    GetPatientDataBySearch,
    GetPatientHomeDataAction,
    GetPatientRecord,
    GetProfileDataAction,
    NoteDoneAction,
    NoteSetAsideAction,
    SetNothingProfile,
    SettingAccountAction,
    SettingAllowsAction,
    SettingCheckBoxAction
} from "../../src/Store/Actions";
import http from "../service/http-common";

export function getUserId() {
    return JSON.parse(localStorage.getItem('user')).user_id;
}

export function getUserFullName() {
    return JSON.parse(localStorage.getItem('user')).fullName;
}

export function getUserRole() {
    return JSON.parse(localStorage.getItem('user')).role;
}

export function GetProfileDataAC(doctorId, setLoading) {
    return async (dispatch) => {
        return await http.get('/users/' + doctorId).then((response) => {
            dispatch({
                type: GetProfileDataAction,
                data: response.data
            })
            setLoading(false)
        })
    }
}

export function GetPatientDataBySearchAC() {
    return async (dispatch) => {
        return await http.get('/users/all-users/').then((response) => {
            dispatch({
                type: GetPatientDataBySearch,
                data: response.data.filter((data) => data.role === 2)
            })
        })
    }
}

export function GetPatientRecordAC(userId) {
    return async (dispatch) => {
        return await http.get('/doctor-page/patient-record/' + userId).then((response) => {
            dispatch({
                type: GetPatientRecord,
                data: response.data
            })
        })
    }
}

export function GetDoctorReviewsAC(userId) {
    return async (dispatch) => {
        return await http.get('/doctor-page/doctor-review/' + userId).then((response) => {
            dispatch({
                type: GetDoctorReviewAction,
                data: response.data
            })
        })
    }
}


export function GetPatientHomeDataAC(search) {
    return async (dispatch) => {
        let endPoints = ['/doctors', '/clinics', '/medicaments', '/pharmacies']
        let promises = endPoints.map((endPoint) => {
            return http.post('/home-page' + endPoint, {text: search})
        })
        promises.push(http.get('/users/all-users'))
        return await Promise.all(promises).then((responseArr) => {
            dispatch({
                type: GetPatientHomeDataAction,
                data: {
                    doctors: responseArr[0].data,
                    clinics: responseArr[1].data,
                    medicament: responseArr[2].data,
                    pharmacies: responseArr[3].data,
                    patients: responseArr[4].data.filter((user) => {
                        return user.role === 2
                    })
                }
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}


export function GetNotificationData(userId, setLoading) {
    return async (dispatch) => {
        return await http.get('/notification/' + userId).then((response) => {
            dispatch({
                type: GetNotificationDataAction,
                data: response.data
            })
            setLoading(false)
        })
    }
}

export function ChangeNoteDoneBtnAC(index) {
    return {
        type: NoteDoneAction,
        index: index
    }
}


export function SetNothingProfileAC() {
    return {
        type: SetNothingProfile
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