import axios from "axios";
import {addUser,getUserbyId,getAllUsers} from"./userAction"
import { useDispatch,useSelector} from 'react-redux';


// export function addUserTh(user){
// axios.post('http://localhost:4000/user/addUser',{user})
// .then(res=>dispatch(addUser(res,data)))
// }

// export function getUser(){
// axios.get()('http://localhost:4000/user/getUserByName/:name')
// .then(res=>dispatch(getUserbyId(res,data)))
// }





// export function addUserTh(user){
//     axios.post('http://localhost:4000/user/addUser',{user})
//     .then(res=>dispatch(addUser(res)))
//     }
    
//     export function getUserbyIdTh(userId){
//     axios.get(userId)('http://localhost:4000/user/getUserByName/:name')
//     .then(res=>dispatch(getUserbyId(res)))
//     }
    
    // export function getAllUsersTh(user){
    // axios.get('http://localhost:4000/user/getAllUsers')
    // .then(res=>dispatch(getAllUsers(res)))
    // }