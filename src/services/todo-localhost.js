import axios from 'axios';

export default {

    get: () => {

        return axios
            .get('/api/todo')
            .then(response => response.data);
    },

    save: (todos) => {
        return axios.post('/api/todo', todos);
    }
};
