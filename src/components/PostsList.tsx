import React from "react";
import Post from "./Post";
import classes from './PostsList.module.css';
import NewPost from "./NewPost";


const PostsList: React.FC = () => {
  return (
    <>
    <NewPost />
    <ul className={classes.posts}>
      <Post author="Max" body="React.js is awesome!" />
      <Post author="Manuel" body="Chec out the full course!" />
      <Post author="Manuel" body="Chec out the full course!" />
      <Post author="Manuel" body="Chec out the full course!" />
    </ul>
    </>
  );
};

export default PostsList;
