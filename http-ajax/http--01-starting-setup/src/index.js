import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import axios from 'axios';
//GLOBAL SETTINGS for AJAX CALL 
axios.defaults.baseURL ='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] ='AUTH-TOKEN';
axios.defaults.headers.post['Content-Type'] ='application/json';//add headers to specifically to post request 

//Catch an errors, while sending request for example if Internet connectivity goes off
axios.interceptors.request.use( requestConfig =>{
    console.log(requestConfig);
    return requestConfig;
    //edit the request config too 
}, error =>{
    console.log('INTERCEPTOR GLOBAL ERROR ',error)//Global Error handler 
    return Promise.reject(error);//returning Promise because locally(in any component where we are making axios request to handle in CATCH block)
});


axios.interceptors.response.use( responseConfig =>{
    console.log(responseConfig);
    return responseConfig;
}, error =>{
    console.log('INTERCEPTOR GLOBAL ERROR ',error)//Global Error handler 
   // return Promise.reject(error);//returning Promise because locally(in any component where we are making axios request to handle in CATCH block)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
