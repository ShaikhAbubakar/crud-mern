import axios from 'axios';

const URL = "http://localhost:8000";

export const addUser = (data)=>{
    try{
        return axios.post(`${URL}/add`,data);
    }catch(err){
        console.log(`Error While Calling addUser API : ${err}`);
    }
}

export const getUsers = async() =>{
    try{
        return await axios.get(`${URL}/allUsers`);
    }catch(err){
        console.log(`Error While Fetching the Data using GET API Method : ${err}`);
    }
}

export const getUser = async (id) =>{
    try{
        return await axios.get(`${URL}/User/${id}`);
    }catch(err){
        console.log(`Error while Fetching Particular User Data using GET API Method : ${err}`);
    }
}

export const editUser = async(user,id)=>{
    try{
        return await axios.put(`${URL}/User/${id}`,user);
    }
    catch(err){
        console.log(`Error while Updating Data using PUT Method : ${err}`);
    }
}

export const deleteUser = async(id)=>{
    try{
        return await axios.delete(`${URL}/User/${id}`);
    }
    catch(err){
        console.log(`Error while Delete Data using Delete Method : ${err.message}`);
    }
}