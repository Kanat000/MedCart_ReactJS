import http from "./http-common";

export function updateProfileInfo(data) {
    return http.put('/users/change-user-info', data)
}

export function createReview(data) {
    return http.post('/doctor-page/create-review', data)
}

export function changePassword(data) {
    return http.put('/users/change-password/' + data.userId + '?newPassword=' + data.newPassword + '&oldPassword=' + data.oldPassword)
}

export function changePhone(userId, phone) {
    return http.put('/users/change-phone/' + userId + '?phone=' + phone)
}

export function changeEmail(userId, email) {
    return http.put('/users/change-email/' + userId + '?email=' + email)
}