import React, { useState, useEffect } from "react";
import "./Feed.css";
import { db } from "./firebase";
import Message from "./Message";
import Post from "./Post";
import Storereel from "./Storereel";
import { collection, getDocs, orderBy } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const usersCollectionref = collection(db, "posts");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(
        usersCollectionref,
        orderBy("timestamp", "desc")
      );
      //orderBy("timestamp", "desc");
      setPosts(
        data.docs.map((doc) => ({
          //...doc.data(), id: doc.id
          id: doc.id,
          data: doc.data(),
        }))
      );
    };
    getUsers();
  }, []);
  return (
    <div className="feed">
      <Storereel />
      <Message />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
