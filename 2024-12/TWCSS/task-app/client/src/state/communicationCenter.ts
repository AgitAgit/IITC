import axios from 'axios';

export default {
    getTasks: async function(){
        const tasks = await axios.get('http://localhost:3000/tasks');
        return tasks;
    }
}
