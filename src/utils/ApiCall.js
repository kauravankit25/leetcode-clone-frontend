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