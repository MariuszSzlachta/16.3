import React from 'react';
import style from './Todo.css';

const TodoItem = (props) => {
  return (
    <li className={style.todo} key={props.id} id={props.id} onClick={() => props.remove(props.id)}>{props.children}</li>
  )
}

export default TodoItem;