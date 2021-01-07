import axios, { AxiosPromise } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = process.env.REACT_APP_CONTENT_TYPE;

class ApiService {
  static getResource (path: string): AxiosPromise {
    try {
      const response = axios.get(path);
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  static postResource (path: string, body: any): AxiosPromise {
    try {
      const response = axios.post(path, body);
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  static putResource (path: string, body: any): AxiosPromise {
    try {
      const response = axios.put(path, body);
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  static deleteResource (path: string): AxiosPromise {
    try {
      const response = axios.delete(path);
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default ApiService;
