import axios from 'axios';
//this instance will helps us to create specific configuration for specific URL/REQUIREMENT and so on
const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] ='AUTH-TOKEN-FROM-AXIOS-INSTANCE';

instance.interceptors.request.use( requestConfig =>{
    console.log('FROM INSTANCE ',requestConfig);
    return requestConfig;
    //edit the request config too 
}, error =>{
    console.log('FROM INSTANCE INTERCEPTOR GLOBAL ERROR ',error)//Global Error handler 
    return Promise.reject(error);//returning Promise because locally(in any component where we are making axios request to handle in CATCH block)
});

export default instance;