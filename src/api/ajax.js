import axios from 'axios'
import resolve from 'resolve'
function ajax(url,data={},type){
   return new Promise(resolve=>{
        let promise;
        if(type==='GET'){
            promise= axios.get(url,{
                params:data
            })
        }else{
            promise= axios.post(url,data) 
        }
        promise
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            alert(err)
        })
    })
}
export default ajax
