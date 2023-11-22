import {produce} from 'immer'

const initialState={
  
    adminList:[
        {
          
           userName:'miri',
           email:'m0504172938@gmail.com',
           password:'1'

        },
        {
        
            userName:'riki',
            email:'riki42124@gmail.com',
            password:'2'
 
         }
         ]


}
export const adminReducer=produce((state,action)=>{
    switch (action.type){
        
        case 'getAdminebyId':
            let admin= state.adminList?.find(u=>u.userName==action.payload.userName&&u.password==action.payload.password)
            console.log("admin from store ",admin)
            return admin
            break;
        default:
            return state;
    }

},initialState)