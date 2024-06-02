import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const  MainHeader:React.FC=()=> {

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        <Link to="/" className='white'>리액트 포스트</Link>
      </h1>
      <p>
        <Link  to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          포스트하기
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;