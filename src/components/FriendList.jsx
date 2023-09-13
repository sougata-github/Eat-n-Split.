import Friend from "./Friend";

const FriendList = ({ friends, handleSelectFriend, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendList;
