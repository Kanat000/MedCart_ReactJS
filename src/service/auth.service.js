import axios from "axios";

const API_URL = "http://localhost:8081/diploma/api/v1/auth";

export const register = (state, photo_url) => {
    console.log(state)
    return axios.post(API_URL + "/signup", {
        role: parseInt(state.role),
        fullName: state.fullName,
        phoneNumber: state.phone,
        iin: state.iin,
        email: state.email,
        password: state.pass,
        confirmPassword: state.re_pass,
        address: state.address,
        city: state.city,
        photo: photo_url,
        rating: 10,
        specialization: state.specialization,
        clinicId: parseInt(state.clinic),
        experience: state.experience,
        about: state.about
    });
};

export const login = (state) => {
    console.log(state)
    return axios.post(API_URL + "/signin", {
        username: state.email,
        password: state.password
    })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};
