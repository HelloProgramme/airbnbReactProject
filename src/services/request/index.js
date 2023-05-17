import axios from "axios";
import { TIMEOUT, BASE_URL } from "./config";

class MyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use(res => {
      return res.data;
    }, err => {
      return err;
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }
  post(config) {
    return this.request({ ...config, method: "post" })
  }


  request(config) {
    return this.instance.request(config)
  }

}

export default new MyRequest(BASE_URL, TIMEOUT)