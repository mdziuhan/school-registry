import axios from "axios"
import {REST_API_BASE_URL} from "../constants/Urls.js";

export const DeactivateSchoolPromise = (id) => axios.patch(REST_API_BASE_URL + id + '/deactivate');