import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sandbox.clicksign.com/api/v1',  
})

api.interceptors.request.use(async config => {
  return config;
});

export default api
