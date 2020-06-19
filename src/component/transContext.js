import React, { createContext, useReducer } from "react";
import TransactionReducer from "./reducer";



const iniTran = [
    // {amount: 500, desc: "Cash"},
    // // {amount: -40, desc: "Book"},
    // {amount: -200, desc: "Camera"}

  ]

  export const TransactionContext = createContext(iniTran)



  export const TransactionProvider = ({children})=>{

    let [state,dispatch] = useReducer(TransactionReducer,iniTran);

   
            function addTran(transObj){
                
                dispatch({
                    type : "Add_TRANSACTION",
                    payload: {

                            amount: transObj.amount,
                            desc: transObj.desc
                    },
                })
            }

            
            return(
                <TransactionContext.Provider value={{
                    transactions: state,
                    
                    addTran
                }}>
                {children}
      </TransactionContext.Provider>
  )
}