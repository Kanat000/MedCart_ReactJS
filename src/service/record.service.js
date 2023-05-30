import http from "./http-common";

export function createRecord(record) {
    console.log(record)
    return http.post('/doctor-page/create-record', {
        doctorId: record.doctor_id,
        filePath: record.file,
        isAvail: record.isSecret,
        patientId: record.patient_id,
        specification: record.description,
        title: record.title
    })
}

export function getDoctorHistory(doctorId) {
    return http.get('/doctor-page/doctor-record/' + doctorId)
}

export function getPatientHistory(patientId) {
    return http.get('/doctor-page/patient-review/' + patientId)
}

export function getDoctorInfo(doctorId) {
    return http.get('/users/' + doctorId)
}