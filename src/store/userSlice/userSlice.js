import { produce } from "immer";

const initialState={
    usersList:[]
    // currentUser:""
//     usersList:[
//         {
//            name:'miri',
//            email:'m0504172938@gmail.com',
//            password:'Mb05041'

//         },
//         {
//             name:'riki',
//             email:'riki42124@gmail.com',
//             password:'Rr11111'
 
//          },
//          {
//             name:'tzipi',
//             email:'tzipi0548529@gmail.com',
//             password:'21330'
 
//          }],
// currentUser:{
//     name:'riki',
//     email:'riki42124@gmail.com',
//     password:'Rr11111'


//  } 
}

export const userReducer=produce((state,action) => {
    switch (action.type){
        case 'addUser':
            debugger
            console.log(state)//usersList
            state.usersList.push(action.payload)
            break;
        case 'updateCurrentUsers':
           state.usersList=action.payload
         
            break;
        default:
            return state;
    }

}, initialState)