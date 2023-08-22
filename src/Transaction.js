
import React from "react"
import { useState, useEffect } from "react"
import TransactionTable from "./TransactionTable";
import TransactionForm from './TransactionForm';

function Transaction(){

    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    


    function addTransaction(transaction){
        const newTransactions = [...transactions, transaction]
      
          setTransactions(newTransactions)
          console.log(transactions)
          
        }

    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then(res => res.json())
        .then(data => {
            setTransactions(data)
        })

    }, []);

    function handleDeleteTransaction(deletedTransaction) {
        const updatedTransactions = transactions.filter(
            (transaction) => {
                return transaction.id !==deletedTransaction.id});
          setTransactions(updatedTransactions);
      }
      


    return(
        <div>
            <TransactionForm onAddTransaction={addTransaction} />
           <TransactionTable transactions={transactions} 
                             searchTerm={searchTerm} 
                             setSearchTerm={setSearchTerm} 
                             onDeleteTransaction={handleDeleteTransaction} 
                             />
       
        </div>
    )
}
export default Transaction