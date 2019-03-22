import React from 'react';


//globally available JS variable 
const authContext = React.createContext({
    isAuthenticated:false,
    login:()=>{}
});

export default authContext;