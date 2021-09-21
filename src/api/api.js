import Vue from 'vue'
import { axios } from '@/utils/request'

const api = {
}

export default api

//post
export function postAction(url, parameter) {
    return axios({
        url: url,
        method: 'post',
        data: parameter
    })
}

//get
export function getAction(url, parameter) {
    return axios({
        url: url,
        method: 'get',
        params: parameter
    })
}