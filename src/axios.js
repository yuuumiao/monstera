import axios from 'axios'

const instance = axios.create({
    //THE API URL
    baseURL: 'http://localhost:5001/monstera-shopping/us-central1/api' 
})

export default instance;