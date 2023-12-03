import axios from "axios";

let BASE_URL = "http://localhost:3000";

export const loginApiCall = async (params) => {
    let url = BASE_URL + "/login"

    let response = await axios.post(url,params);

        return {
            status: response.status,
            data: response.data
        }
}

export const problemsApiCall = async () => {
    let url = BASE_URL + "/questions?limit=10"
    let accessToken = JSON.parse(localStorage.getItem("accessToken"));

    let response = await axios.get(url,{ headers: {"authorization" : `Bearer ${accessToken}`} });

        return {
            status: response.status,
            data: response.data ? response.data.data : null
        }
}