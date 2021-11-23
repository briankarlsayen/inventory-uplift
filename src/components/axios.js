import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

const instance = axios.create({
    baseURL: 'http://localhost:5432',
    // baseURL: "https://mern-todo-task.herokuapp.com/"
});

export default instance;