import axios from 'axios';

const axiosIns = axios.create({
     baseURL: 'https://react-burger-abdcf.firebaseio.com'
})
export default axiosIns;