export function addUser(user){
    debugger
    return {type:'addUser', payload:user}
}

export function getUserbyId(userId){
    return {type:'getUserbyId', payload:userId}
}
export function getAllUsers(data){
    return {type:'updateCurrentUsers', payload:data}
}