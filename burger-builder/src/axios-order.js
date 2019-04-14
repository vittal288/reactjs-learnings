import axios from 'axios';

const instace = axios.create({
    baseURL:'https://react-my-burger-app-9ced5.firebaseio.com/'
});


export default instace;