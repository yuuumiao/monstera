import axios from 'axios'

const instance = axios.create({
    //THE API URL
    baseURL: 'https://europe-west2-monstera-shopping.cloudfunctions.net/api'
    // 'http://localhost:5001/monstera-shopping/europe-west2/api',
    // withCredentials: true, 
})

export default instance;