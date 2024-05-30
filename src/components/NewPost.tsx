import classes from './NewPost.module.css';

interface NewPostProps{
  onBodyChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onAuthorChange: React.ChangeEventHandler<HTMLInputElement>;
}

const NewPost: React.FC<NewPostProps> = (prpos) => {

  return (
    <form className={classes.form} >
      <p>
        <label htmlFor="body">내용</label>
        <textarea id="body" required rows={3} onChange={prpos.onBodyChange} />
      </p>
      {/* <p>{enteredBody}</p> */}

      <p>
        <label htmlFor="name">작성자</label>
        <input type="text" id="name" required onChange={prpos.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;
