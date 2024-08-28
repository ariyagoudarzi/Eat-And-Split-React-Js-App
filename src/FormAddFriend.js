import { useState } from "react";
import { Button } from "./App";

export function FormAddFriend({ onFriendList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name: `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onFriendList(newFriend);

    setImage("https://i.pravatar.cc/48");
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>
        <lord-icon
          src="https://cdn.lordicon.com/kthelypq.json"
          trigger="hover"
          colors="primary:#495057"
          style={{ width: "25px", height: "25px" }}
        ></lord-icon>{" "}
        Friend Name
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>
        <lord-icon
          src="https://cdn.lordicon.com/baxknfaw.json"
          trigger="hover"
          colors="primary:#495057"
          style={{ width: "25px", height: "25px" }}
        ></lord-icon>
        Image Url
      </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
