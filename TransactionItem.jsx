const TransactionItem = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount > 0 ? '+' : '-';
  const type = transaction.amount > 0 ? 'income' : 'expense';

  return (
    <div className={`transaction-item ${type}`}>
      <span>{transaction.description}</span>
      <span>
        {sign}${Math.abs(transaction.amount).toFixed(2)}{' '}
        <button onClick={() => deleteTransaction(transaction.id)}>x</button>
      </span>
    </div>
  );
};

export default TransactionItem;
