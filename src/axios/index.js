import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-blog-backend-mern.herokuapp.com/'
});

export const api = {
    getPosts() {
        return instance.get('posts');
    },
    getOnePost(id){
        return instance.get(`posts/${id}`);
    },
};