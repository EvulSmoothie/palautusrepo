import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/'

const getAll = () => {
    return axios.get(`${baseUrl}all`)
}

const getOne = (name) => {
    return axios.get (`${baseUrl}${name}`)
}

export default {getAll, getOne}