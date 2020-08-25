import axios, {AxiosInstance} from 'axios';
class Http{
  instance: AxiosInstance;
  constructor(){
    this.instance  = axios.create({timeout:5000});
    //全局默认使用json头
    this.instance.defaults.headers['Content-Type'] = 'application/json';
    // this.instance.defaults.transformResponse = [(data:any)=>{
    //   // console.log(data); 
    //   return data as resData;
    // }];
    this.instance.interceptors.response.use((value)=>{
      return value.data;
    },(err)=>{
      return Promise.reject(err.response.data);
    })
  }
}

const http = new Http();

export default http.instance;