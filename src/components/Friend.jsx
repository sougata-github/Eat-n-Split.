const Friend = ({ id, name, image, balance }) => {
  return (
    <li>
      <img src={image} alt="image" />
      <h3>{name}</h3>
      {balance < 0 ? (
        <p className="red">
          You owe {name} {Math.abs(balance)}.
        </p>
      ) : balance > 0 ? (
        <p className="green">
          {name} owes you {Math.abs(balance)}.
        </p>
      ) : (
        <p>You and {name} are even.</p>
      )}
      <button className="button">Select</button>
    </li>
  );
};

export default Friend;
