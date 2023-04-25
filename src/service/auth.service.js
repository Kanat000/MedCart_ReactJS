import axios from "axios";

const API_URL = "http://localhost:8081/diploma/api/v1/auth";

export const register = (state) => {
    console.log(state)
    return axios.post(API_URL + "/signup", {
        role: parseInt(state.role),
        fullName: state.fullName,
        phoneNumber: state.phone,
        iin: state.iin,
        email: state.email,
        password: state.pass,
        confirmPassword: state.re_pass,
        patronymic: "string",
        registerDate: "2023-04-23T06:28:06.841Z",
        status: "string",
        username: "string"
    });
};

export const login = (state) => {
    return axios
        .post(API_URL + "/signin", {
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

// const logout = () => {
//     localStorage.removeItem("user");
// };