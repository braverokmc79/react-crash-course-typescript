import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import React from 'react';

interface MainHeaderProps{
    onCreatePost:() => void;
}

const  MainHeader:React.FC<MainHeaderProps>=({ onCreatePost })=> {

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        리액트 포스트
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          포스트하기
        </button>
      </p>
    </header>
  );
}

export default MainHeader;