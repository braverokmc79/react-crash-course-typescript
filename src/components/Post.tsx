import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
import { PostData } from "./PostsList";

const Post: React.FC<PostData> = ({ id, author, body }) => {
  return (
    <Link to={id} className={classes.post}>
      <li>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </li>
    </Link>
  );
};

export default Post;
