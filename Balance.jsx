const Balance = ({ transactions }) => {
  const amounts = transactions.map((t) => Number(t.amount));
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);

  return (
    <section>
      <h3>Your Balance</h3>
      <h1>${total}</h1>
    </section>
  );
};

export default Balance;
