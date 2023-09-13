import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ handleAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleSubmit(event) {
    event.preventDefault();

    const id = crypto.randomUUID();

    if (!name || !image) {
      return;
    }
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    handleAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label> 🫂 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
