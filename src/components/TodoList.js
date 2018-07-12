import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
  const elements = props.data.map( todo => <li key={todo.id} id ={todo.id} onClick={() => props.remove(todo.id)}>{todo.text}</li> )
  
  return (
    <div>
      <ol className={style.TodoList}>
        {elements}
      </ol>
    </div>
  );
};

export default TodoList;
