import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    bills : [
        {
            id: 0,
            veg : 0,
            budget : 0,
            rupees : '',
            items : [],
            slno : 0,
            school : ''
        }
    ]
}

export const billSlice = createSlice({
    name : 'bill',
    initialState,
    reducers : {
        addBill : (state, action) => {
            const bill : any= {
                id : nanoid(),
                veg : action.payload.veg,
                budget : action.payload.budget,
                rupees : action.payload.rupees,
                items : action.payload.items,
                slno : action.payload.slno,
                school : action.payload.school
            }
            state.bills.push(bill)
        },
        removeBill : (state, action) => {
            state.bills = state.bills.filter((bill) => bill.id !== action.payload.id)
        }
    }
})

export const { addBill, removeBill } = billSlice.actions

export default billSlice.reducer