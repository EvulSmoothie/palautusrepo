//Backend ihmisten tietojen hakua varten
import axios from 'axios'
const baseUrl = '/api/persons'
//Haetaan kaikki, lähinnä alkulistausta varten
const getAll = () => {
  return axios.get(baseUrl)
}
//Uuden henkilön luonti, saa henkilö-objectin jonka lähettään post pyyntönä palvelimelle
const create = newObject => {
  return axios.post(baseUrl, newObject)
}
//Henkilön päivitys, käytännössä vain korvataan vanha henkilö uudella
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}
//Henkilön deletointi ID:n perusteella
const del = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
//Yksittäisen henkilön haku ID:n perusteella
const getOne = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}


export default {getAll,create,update,del,getOne
}