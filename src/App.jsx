import {
  Button,
  FormAddFriend,
  FormSplitBill,
  FriendList,
} from "./components/index";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  //state for adding a new friend

  const [friends, setFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setIsOpen(false);
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setIsOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h1>🍔 Eat and Split 💵</h1>
        <FriendList
          friends={friends}
          handleSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {isOpen && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleClick}>{isOpen ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
};

export default App;
