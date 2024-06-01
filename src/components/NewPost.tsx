import { useState } from 'react';
import classes from './NewPost.module.css';
import { PostData } from './PostsList';

interface NewPostProps {
  onCancel: () => void;
  onAddPost: (postData:PostData)=> void;
}

const NewPost: React.FC<NewPostProps> = (props) => {
  const [enteredBody, setEnteredBody] = useState<string>("");
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");

  const bodyChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const postData={body:enteredBody,author:enteredAuthor}
    props.onAddPost(postData);
    props.onCancel();
  };



  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">내용</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChangeHandler}
          value={enteredBody}
        />
      </p>

      <p>
        <label htmlFor="name">작성자</label>
        <input
          type="text"
          id="name"
          required
          onChange={authorChangeHandler}
          value={enteredAuthor}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          취소
        </button>
        <button type="submit">전송</button>
      </p>
    </form>
  );
};

export default NewPost;
