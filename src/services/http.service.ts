import axios from "axios";

class HttpService {
    private static API_URL = 'https://app-booking-christ.herokuapp.com';

    private static buildUrl(path: string) {
        return HttpService.API_URL + path;
    }

    get(path: string): Promise<any> {
        return axios.get(HttpService.buildUrl(path)).then(res => res.data);
    }

    put(path: string, body: any) {
        return axios.put(HttpService.buildUrl(path), body).then(res => res.data);
    }

    post(path: string, body: any) {
        return axios.post(HttpService.buildUrl(path), body).then(res => res.data);
    }

    delete(path: string) {
        return axios.delete(HttpService.buildUrl(path)).then(res => res.data);
    }
}

const httpService = new HttpService();
export default httpService;
