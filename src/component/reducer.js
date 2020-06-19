const TransactionReducer = ((state,action)=>{

    switch(action.type){      
        case "Add_TRANSACTION" :{
            return [action.payload,...state]
        }
        default:
            return state;
    }
})

export default TransactionReducer;