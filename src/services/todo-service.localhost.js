import axios from 'axios';

export default {

    get: () => {

        return axios
            .get('http://localhost:8888/api/todo')
            .then(response => response.data);
    },

    save: (todos) => {
        return axios.post('http://localhost:8888/api/todo', todos);
    }
};
