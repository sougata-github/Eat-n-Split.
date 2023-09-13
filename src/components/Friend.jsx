import Button from "./Button";

const Friend = ({ friend, handleSelectFriend, selectedFriend }) => {
  return (
    <li className={`${friend.id === selectedFriend?.id ? "selected" : ""}`}>
      <img src={friend.image} alt="image" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}.
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}.
        </p>
      ) : (
        <p>You and {friend.name} are even.</p>
      )}
      <Button onClick={() => handleSelectFriend(friend)}>
        {friend.id === selectedFriend?.id ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
