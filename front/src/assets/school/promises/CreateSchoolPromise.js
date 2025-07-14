import axios from "axios"
import {REST_API_BASE_URL} from "../constants/Urls.js";

export const CreateSchoolPromise = (name, region, edrpou, schoolType) => {
    const data = {
        name,
        region,
        edrpou,
        schoolType
    }
    return  axios.post(REST_API_BASE_URL, data);
}