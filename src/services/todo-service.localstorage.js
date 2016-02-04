export default {

    get: () => {
        const todos = JSON.parse(window.localStorage.getItem('todos')) || [];
        return Promise.resolve(todos);
    },

    save: (todos) => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
        return Promise.resolve('ok');
    }
};
