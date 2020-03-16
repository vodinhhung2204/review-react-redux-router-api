import axios from 'axios'

export default function callApi(method,api,data){
    return axios({
        method: method,
        url:'http://5dd3bd188b5e080014dc4a7e.mockapi.io/demo/'+api,
        data: data
      }).catch(res => {
        console.log("ERROR: " + res)
      });
}