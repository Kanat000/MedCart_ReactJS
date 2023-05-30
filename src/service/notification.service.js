import http from "./http-common";


export function createNotificationForPatient(patientId, doctorId, doctorName, recordTitle) {
    let text = 'We are pleased to inform you that Dr. [' + doctorId + ', ' + doctorName + '] has created a new record titled "{' + recordTitle + '}" for you in our web application. Please log into your profile to access and review this important addition to your medical records.'
    return http.post('/notification/create', {notification: text, userId: patientId})
}

export function createNotificationForDoctor(doctorId, patientId, patientName, recordTitle) {
    let text = 'We are pleased to inform you that a new record titled "{' + recordTitle + '}" has been successfully created for patient, [' + patientId + ', ' + patientName + ']. This record serves as a valuable addition to their medical history, providing comprehensive insights into their healthcare journey.'
    return http.post('/notification/create', {notification: text, userId: doctorId})
}