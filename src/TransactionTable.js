
function TransactionTable({transactions, searchTerm, setSearchTerm, onDeleteTransaction}){

    const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDeleteClick(transaction){

    fetch(`http://localhost:3000/transactions/${transaction.id}`, {
          method: "DELETE",
        })
          .then(() => onDeleteTransaction(transaction))
          .catch( error=>console.log("Error deleting transaction", error))
}

    return(
        <div className="table-container">
              <h2>Transactions</h2>
              <input type="text" placeholder="Search By Description"  value={searchTerm} 
                     onChange={(event=> setSearchTerm(event.target.value))}/>
             <table className="transaction-table">
                <thead>
                    <tr>
                     <th>Date</th>
                     <th>Description</th>
                     <th>Amount</th>
                     <th>Category</th>
                     <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map(transaction => (
                     <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>
                        <button onClick={() => handleDeleteClick(transaction)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TransactionTable;