import axios from "axios"
import {REST_API_BASE_URL} from "../constants/Urls.js";

export const getSchoolsPromise = (active, region, schoolType,) => axios.get(REST_API_BASE_URL, {
    params: {
        active: active,
        region: region,
        schoolType: schoolType
    }
});