
function TransactionTable({transactions, searchTerm, setSearchTerm}){

    const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map(transaction => (
                     <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.category}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TransactionTable;