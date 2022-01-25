import axios from "axios";


function HttpService() {
    const _http = axios;

    return {
        async get(url, params) {
            const response = await _http.get(url, {
                params,
            });
            return response.data;
        },

        async post(url, payload) {
            const response = await _http.post(url, payload);

            return response.data
        },

        async patch(url, payload) {
            const response = await _http.patch(url, payload);

            return response.data
        },

        async delete(url) {
            const response = await _http.delete(url);
        },

    };
}

export default HttpService;