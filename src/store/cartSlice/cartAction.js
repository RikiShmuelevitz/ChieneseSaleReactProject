export function addCartsProduct(id,product){
    return {type:'addCartProduct', payload:{id:id,product:product}}
}
export function removeCartsProduct(id){
    return {type:'removeCartsProduct', payload:id}
}
export function setCartProductNum(productid,num){
    return {type:'setCartProductNum', payload:{productid:productid,num:num}}
}
export function replaceItemCart(product){
    return {type:'replaceItemCart', payload:product}
}