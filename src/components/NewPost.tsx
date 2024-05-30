import classes from './NewPost.module.css';
import React from 'react';

const NewPost: React.FC = () => {

  const changeBodyHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    console.log('changeBodyHandler:', event.target.value);
  }

  return (
    <form className={classes.form} >
      <p>
        <label htmlFor="body">내용</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">작성자</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
