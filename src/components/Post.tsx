import React from "react";
import classes from './Post.module.css';


//const names:string[]=["리액트+바이트+타입스크립트", "마누엘"]
interface PostParam {
  author: string;
  body: string;
}

const Post: React.FC<PostParam> = ({author, body}) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
};

export default Post;
