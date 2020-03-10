import axios from 'axios';
// 

// axios.defaults.baseURL = 'http://49.233.184.116:5001/'


//request timeout 
axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * get method
 * @param {String} url [request url address]
 * @param {Object} params [parameters]
 */
export function get(url, params = {}){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })
});}
