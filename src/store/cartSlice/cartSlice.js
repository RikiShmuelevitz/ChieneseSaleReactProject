import {produce} from 'immer'

const initalState =  {
    cartList : []
}

export const cartReducer = produce((state, action) => {
    switch (action.type) {
        case "addCartProduct":
            console.log("cart slice ", action.payload)
            state.cartList.push({cartId:action.payload.id,item:action.payload.product} )
            console.log("cartList from slice ", state.cartList)
            break;
        case "removeCartsProduct":
            state.cartList= state.cartList?.filter(p=>p.cartId!==action.payload)
            break;
        case "setCartProductNum":
            console.log(  "state.cartList",state.cartList)
            console.log(  " state.cartList[action.payload.productid-1].num", state.cartList[action.payload.productid]?.item.num)

            if(state.cartList[action.payload.productid]!==undefined)
           {
            console.log(  "AAA state.cartList[action.payload.productid-1]", state.cartList[action.payload.productid])
            state.cartList[action.payload.productid].item.num+=action.payload.num 
           } 
            console.log(  "action.payload",action.payload)
            console.log(  " state.cartList[action.payload.productid-1].num", state.cartList[action.payload.productid]?.item.num)
        // case "replaceItemCart":
        //    if(state.cartList[action.payload.productid-1]!==undefined)
        //    state.cartList[action.payload.productid-1].num+=action.payload.num 
           
    
        default:
            return state;
    }

}, initalState)