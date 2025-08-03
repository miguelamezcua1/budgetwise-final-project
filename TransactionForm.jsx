import { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) return;

    const newTransaction = {
      id: crypto.randomUUID(),
      description,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (positive = income, negative = expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
