import {useState} from "react"

function TransactionForm({onAddTransaction, onDeleteTransaction}){

const [description, setDescription] =useState("");
const [amount, setAmount] = useState("");
const [category, setCategory] = useState("");

function handleSubmit(event){
    event.preventDefault()
    const newTransaction ={
        date: new Date().toISOString().split("T")[0],
        description: description,
        amount:parseFloat(amount),
        category: category
    };
    

    fetch("http://localhost:3000/transactions",{
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(newTransaction)
      })
      .then(r => r.json())
      .then(data=>console.log(data))
      .catch(error => console.log(error))
    //console.log(newTransaction)

    onAddTransaction(newTransaction)


    setDescription('');
    setAmount('');
    setCategory('');


};


    return(
        <div >
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <>
                <label>Description:</label>
                <input type="text" value={description} onChange={(event)=>{
                    setDescription(event.target.value)}} required />
                </>
                <>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(event)=>{
                    setAmount(event.target.value)}} required/>
                </>
                <>
                <label>category:</label>
                    <input type="text" value={category} onChange={(event)=>{
                        setCategory(event.target.value)}} required/>
                </>
                <>
                <button type="submit">Add Transaction</button>
                </>
            </form>
        </div>
    )
}
export default TransactionForm;