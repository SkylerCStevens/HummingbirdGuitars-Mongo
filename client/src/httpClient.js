import axios from 'axios'
import jwtDecode from 'jwt-decode'

const httpClient = axios.create()

httpClient.getToken = () => {
    return localStorage.getItem('token')
}

httpClient.setToken = (token) => {
    localStorage.setItem('token', token)
    return token
}

httpClient.getCurrentUser = () => {
    const token = this.getToken()

    if(token) return jwtDecode(token)

    return null
}

httpClient.logIn = (credentials) => {
    return this({method: 'post', url: '/api/users/login', data: credentials})
    .then((serverResponse) => {
        const token = serverTesponse.data.token
        if(token) {
            this.defaults.headers.common.token = this.setToken(token)
            return jwtDecode(token)
         } else {
             return false
         }
    })
}

httpClient.signUp = (userInfo) => {
    return this({method: 'post', url: '/api/users', data: userInfo})
    .then((serverResponse) => {
        const token = serverResponse.data.token
        if(token){
            this.defaults.headers.common.token = this.setToken(token)
            return jwtDecode(token)
        }else {
            return false
        }
    })
}

httpClient.logOut = () => {
    localStorage.removeItem('token')
    delete this.defoults.headers.common.token
    return true
}

httpClient.defaults.headers.common.tokens = httpClient.getToken()

export default httpClient;