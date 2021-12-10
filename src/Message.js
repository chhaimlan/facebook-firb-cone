import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Message.css";
import { useStateValue } from "./Stateprovider";

function Message() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const usersCollectionref = collection(db, "posts");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(usersCollectionref, {
      message: input,
      timestamp: serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="message">
      <div className="message_top">
        <Avatar src={user.photoURL} />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="message_input"
            placeholder={`What's on your mind, ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="message_bottom">
        <div className="message_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default Message;
