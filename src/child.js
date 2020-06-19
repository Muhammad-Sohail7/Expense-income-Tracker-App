import React, { useState, useContext } from 'react';
import {TransactionContext} from "./component/transContext"
import dusts from "./dusts.png"


const Child = () =>{

  let {transactions ,addTran} = useContext(TransactionContext)
  // const { deleteTransaction } = useContext(TransactionContext);

  let [newDesc,setDesc ] = useState("");
  let [newamount,setamount] = useState(0);



  


  const handleadd= (event) =>{
event.preventDefault();

if(Number(newamount) === 0){
  alert("Please Enter Correct Value")
}


addTran({
  amount: Number(newamount),
  desc: newDesc
})
 }

const getIncome = ()=>{
  let income = 0;
  for(var i = 0; i < transactions.length; i++){
    if(transactions[i].amount > 0)
    income = income + transactions[i].amount
  }
  return income;
}


const getExpense = ()=>{
  let expense = 0;
  for(var i = 0; i < transactions.length; i++){
    if(transactions[i].amount < 0)
    expense = expense +  transactions[i].amount
  }
  return expense;
}


const deleteitem = (event) =>{
  let id = event.target.id;

  var item = transactions;
  item.splice(id,1);
  setDesc({
    transactions: item
  })
}





  return (
    <div className="container" >
<h1 className="text-center">Expense Tracker</h1>

  <h3>Your Balance <br /> {getIncome() + getExpense()}</h3>

<div className="expense-container">
  <h3>Income <br /> {getIncome()}</h3>
  
  <h3>Expense <br /> {getExpense()}</h3>

</div>

        <h3>History</h3>
        <hr />

        <ul className="transaction-list">
          {transactions.map((transObj,ind)=>{
              return(<li key={ind}>
                <span onClick={deleteitem}id={ind}><img src={dusts} alt="maldives" className="img"/></span>

                      <span>{transObj.desc}</span>
                      <span>{transObj.amount}</span>
                </li>
              )
            })}
      

        </ul>




        <h3>Add new transaction</h3>
        <hr />

    <form  onSubmit={handleadd}>
        <label>
          <br />
          
            Enter Description <br />
            <input type="text" onChange={(event)=>setDesc(event.target.value)} required className="inp1"/>
        </label>
<br />
        <label><br />
           Enter Amount <br />
            <input type="number" onChange={(event)=>setamount(event.target.value)} required className="inp1" />
            
            {/* <button className="btn"><span>Add</span></button> */}
            <input type="submit" value="Add Transaction" className="btn"/>
            </label>
    </form>



    </div>
  );
}

export default Child;
