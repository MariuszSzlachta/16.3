import React from 'react';
import style from './Title.css';

const Title = props => {
  return (
    <div>
      <h1 className={style.Title}>Todo App</h1>
      <p className={style.Title}>Tasks in queue: {props.tasks}</p>
    </div>
  )
}

export default Title;