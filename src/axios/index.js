import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-blog-backend-mern.herokuapp.com/' || process.env.REACT_APP_API_URL,
    headers: {
        authorization: window.localStorage.getItem('token')
    }
});

export const api = {
    register(params) {
        return instance.post('auth/register', params);
    },
    login(params) {
        return instance.post('/auth/login', params);
    },
    getMe() {
        return instance.get('auth/me');
    },
    getPosts({sort, filter}) {
        if(sort && filter) {
            return instance.get(`posts?sort=${sort}&tags=${filter}`);
        }
        if(sort) {
            return instance.get(`posts?sort=${sort}`);
        }
        if(filter) {
            return instance.get(`posts?tags=${filter}`);
        }
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
    },
    getTags() {
        return instance.get('tags');
    }
};