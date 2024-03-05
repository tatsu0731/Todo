import axios from 'axios';
// import API from './constants';

export const getTodos = async() => {
    try {
        const res = await axios.get(`http://localhost/api/tasks/index`);
        return res.data;
    } catch(error) {
        console.error('Error while fetching todos:', error);
        throw error;
    }
}