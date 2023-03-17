import axios from "axios";

axios.interceptors.request.use(
    (requestObj) => {
        console.log("Inside the Request Interceptor");
        requestObj.headers = {
            'check': 'valid'
        }
        return requestObj;
    },
    (errorObj) => {
        console.log("");
    }
);