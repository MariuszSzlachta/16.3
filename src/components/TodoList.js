import React from 'react';
import style from './TodoList.css';
import TodoItem from './Todo'

const TodoList = props => {
  const elements = props.data.map( todo => <TodoItem key={todo.id} id={todo.id} remove={props.remove}>{todo.text}</TodoItem> )
  return (
    <div className={style.container}>
      <ol className={style.TodoList}>
        {elements}
      </ol>
    </div>
  );
};

export default TodoList;
