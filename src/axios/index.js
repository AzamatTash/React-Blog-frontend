import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-blog-backend-mern.herokuapp.com/' || process.env.REACT_APP_API_URL,
    headers: {
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBlZmM3NjJlYmU1ZDZlNGQ4N2Y0YTEiLCJpYXQiOjE2NjMwNjUzMzcsImV4cCI6MTY2NTY1NzMzN30.YLH6IfS7ZhwSDHdgazXGoZiOxQskeusvBvPNh6v8tNE'
    }
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