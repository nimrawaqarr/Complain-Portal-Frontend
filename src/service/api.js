import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    }catch (error){
        console.log('Error while calling add user Api', error);
    }
}

export const getUsers = async () => {
    try{
        const user= await axios.get(`${URL}/all`);
        console.log('hello', user)
        return user
    }catch(error){
        console.log('Error while calling get users Api', error);
    }
}

// update user
export const getUser = async (id) => {
    try{
       const editUser = await axios.get(`${URL}/${id}`);
        console.log('edit',editUser)
        return editUser
    }
    catch(error){
        console.log('Error while calling getUsers Api', error);
    }
}

export const editUser = async (user, id) =>{
    try{
        return await axios.post(`${URL}/${id}`, user);
        
    }
    catch(error){
        console.log('Error while calling editUsers Api', error);
    }
}

//delete user
export const deleteUser = async(id) =>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteUsers Api', error);
    }
}
