import axios from "axios";

axios.interceptors.response.use(
    (responObj) => {
        responObj.headers = {
            'check': 'Tamil'
        }
        return responObj;
    },
    (errorObj) => {
        console.log('errorObj');
    }
)