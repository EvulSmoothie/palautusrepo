//Tiedonhaku palvelu maitten hakua varten. Puuttuu mahdollisuus hakea muulla kuin maan nimellä eli joittenkin maitten kohdalla tulee ongelmia(Esim South Sudan vs Sudan)
import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/'
//Kaikkien maitten haku
const getAll = () => {
    return axios.get(`${baseUrl}all`)
}
//Yhden maan haku tietyllä nimellä
const getOne = (name) => {
    return axios.get (`${baseUrl}${name}`)
}

export default {getAll, getOne}