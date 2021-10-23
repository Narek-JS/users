import axios from "axios";
const URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
    baseURL: URL
});

const getUsers = (path) => api.get(path);
const getUser = (path) => api.get(path);
const getPosts = (path) => api.get(path);

export { getUsers, getUser, getPosts };








// const getUsers = async (users, setUsers) => {
//     setUsers({...users, loading: true});
//     const api = axios.create({
//         method: 'users',
//         baseURL: URL,
//         data: {...users}
//     });
//     const response = await api.get('/users');
//     setUsers({data: response.data, loading:false});
// };

// async function getUser(id, user, setUser){
//     setUser({...user, loading: true});
//     const api = axios.create({
//         method: 'post',
//         baseURL: URL,
//         data: {...user}
//     });
//     const response = await api.get(`/users/${id}`);
//     setUser({data: response.data, loading: false});
// };

// async function getPosts(id, posts, setPosts){
//     setPosts({...posts, loading: true});
//     const api = axios.create({
//         method: 'posts',
//         baseURL: URL,
//         data: {...posts}
//     });
//     const response = await api.get('/posts');
//     const filteredPosts = response.data.filter(post => post.userId === +id);
//     setPosts({data: filteredPosts, loading: false});
// };









