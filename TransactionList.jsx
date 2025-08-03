import TransactionItem from './TransactionItem.jsx';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <section>
      <h3>History</h3>
      {transactions.length === 0 && <p>No transactions yet.</p>}
      {transactions.map((tx) => (
        <TransactionItem
          key={tx.id}
          transaction={tx}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </section>
  );
};

export default TransactionList;
