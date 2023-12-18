import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

export const cartSlice = createSlice({
    name : "cartslice",
    initialState,
    reducers : {
        storeData : (state,action)=>{
            state.cart = action.payload
        },
        tickMark : (state,action) => {
            let ind = state.cart.findIndex(x => x.id === action.payload)
            state.cart[ind].status = "Approved"
            state.cart[ind].class = "spg"
            state.cart[ind].c1 = "colg"
            state.cart[ind].c2 = ""
        },
        CrossMarkNo:(state,action) => {
            let ind = state.cart.findIndex(x => x.id === action.payload)
            state.cart[ind].status = "Missing"
            state.cart[ind].class = "spr"
            state.cart[ind].c2 = "coltr"
            state.cart[ind].c1 = ""
        },
        CrossMarkYes:(state,action) => {
            let ind = state.cart.findIndex(x => x.id === action.payload)
            state.cart[ind].status = "Missing-Urgent"
            state.cart[ind].class = "sptr"
            state.cart[ind].c2 = "colr"
            state.cart[ind].c1 = ""
        },
        missingProd : (state,action)=> {
            let ind = state.cart.findIndex(x => x.id === action.payload)
            state.cart[ind].status = "Missing-Product"
            state.cart[ind].class = "spo"
            state.cart[ind].c2 = ""
            state.cart[ind].c1 = "colg"
        },
        QuantitynotSame : (state,action)=> {
            let ind = state.cart.findIndex(x => x.id === action.payload)
            state.cart[ind].status = "Quantity-Changed"
            state.cart[ind].class = "spg"
            state.cart[ind].c2 = ""
            state.cart[ind].c1 = "colg"
        },
        priceUpdated : (state,action)=> {
            let ind = state.cart.findIndex(x => x.id === action.payload)
            state.cart[ind].status = "Price Updated"
            state.cart[ind].class = "spg"
            state.cart[ind].c2 = ""
            state.cart[ind].c1 = "colg"
        },
        IncreaseQuantity : (state,action) => {
            let ind = state.cart.findIndex(x => x.id === action.payload);

            if (state.cart[ind].quantity >= 0){
                state.cart[ind].quantity += 1
            }
        }
    }

})

export const {storeData,tickMark,CrossMarkNo,CrossMarkYes,missingProd,QuantitynotSame,priceUpdated,IncreaseQuantity} = cartSlice.actions

export default cartSlice.reducer