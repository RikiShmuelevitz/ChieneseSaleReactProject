export function addProduct(product){
    return {type:'addProduct', payload:product}
}

export function initProducts(data){
    return {type:'initProducts', payload:data}//////////????
}

// export function getProductById(productId){
//     return {type:'getProductById', payload:productId}
// }
export function setProductNum(productid,num){
    return {type:'setProductNum', payload:{productid:productid,num:num}}
}
