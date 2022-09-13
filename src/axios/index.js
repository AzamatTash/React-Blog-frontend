import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const api = {
    login(params) {
        return instance.post('/auth/login', params);
    },
    getPosts() {
        return instance.get('posts');
    },
    getOnePost(id) {
        return instance.get(`posts/${id}`);
    },
    uploadImg(file) {
        return instance.post('upload', file)
    },
    uploadPost(data) {
        return instance.post('posts', data)
    }
};