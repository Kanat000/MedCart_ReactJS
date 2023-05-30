import axios from "axios";

const API_URL = "http://localhost:8081/diploma/home-page";

export const getDoctors = async () => {
    return await axios.post(API_URL + "/doctors", {}).then((response) => {
        console.log(response.data)
        return response.data
    });
};

export const getClinics = async () => {
    return await axios.post(API_URL + "/clinics", {}).then((response) => {
        console.log(response.data)
        return response.data
    });
};

export const getMedicaments = async () => {
    return await axios.post(API_URL + "/medicaments", {}).then((response) => {
        return response.data
    });
};

export const getPharmacies = async () => {
    return await axios.post(API_URL + "/pharmacies", {}).then((response) => {
        return response.data
    });
};