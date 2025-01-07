import axios from "axios";

const backendUrl = `http://localhost:8080/api/v1/auth`;

export const registerUser = async ({ username, email, password }) => {
    try {
        const reqUrl = `${backendUrl}/register`;
        const response = await axios.post(reqUrl, {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        alert("Something went wrong");
        return null;
    }
};


export const loginUser = async ({ email, password }) => {
    try {
        const reqUrl = `${backendUrl}/login`;
        const response = await axios.post(reqUrl, {
            password,
            email,
        });
        if (response.data?.token) {
            localStorage.setItem("token", JSON.stringify(response.data?.token));
            localStorage.setItem("name", JSON.stringify(response.data?.name));
            localStorage.setItem("userId", JSON.stringify(response.data?.userId));
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        alert("Something went wrong");
        return false;
    }
};
