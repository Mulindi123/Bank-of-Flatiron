import {useState} from "react"

function TransactionForm({onAddTransaction, index}){

const [description, setDescription] =useState("");
const [amount, setAmount] = useState("");
const [category, setCategory] = useState("");

function handleSubmit(event){
    event.preventDefault()
    const newTransaction ={
        date: new Date().toISOString().split("T")[0],
        description,
        amount:parseFloat(amount),
        category
    };
    console.log(newTransaction)

    onAddTransaction(newTransaction)


    setDescription('');
    setAmount('');
    setCategory('');
    

};


    return(
        <div key={index}>
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