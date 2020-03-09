import {get} from './http.js'

export const getMyList = () => get(`./mylist.json`)
export const getRecom = () =>  get(`./recommendations.json`)

