import Post from "./Post";
import classes from './PostsList.module.css';
import NewPost from "./NewPost";
import React, { useState } from 'react';
import Modal from './Modal';


const PostsList: React.FC = () => {

  const [enteredBody, setEnteredBody] = useState<string>("");
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");
  
  const bodyChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {   
    setEnteredBody(event.target.value);
  }

  const authorChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {    
    setEnteredAuthor(event.target.value);
  }


  return (
    <>
    <Modal>
       <NewPost  onBodyChange={bodyChangeHandler}   onAuthorChange={authorChangeHandler}   />
    </Modal>

    <ul className={classes.posts}>
      <Post author={enteredAuthor} body={enteredBody} />
      <Post author="Manuel" body="Chec out the full course!" />
    </ul>
    </>
  );
};

export default PostsList;
