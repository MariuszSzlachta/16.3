import React from 'react';

const TodoList = props => {
  const elements = props.data.map( todo => <li key={todo.id} id ={todo.id} onClick={() => props.remove(todo.id)}>{todo.text}</li> )
  
  return (
    <div>
      <ol>
        {elements}
      </ol>
    </div>
  );
};

export default TodoList;
