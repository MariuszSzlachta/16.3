import React from 'react';
import style from './Title.css';

const Title = props => {
  return (
    <div>
      <h1 className={style.heading}>Todo App</h1>
      <p className={style.counter}>Tasks in queue: {props.tasks}</p>
    </div>
  )
}

export default Title;