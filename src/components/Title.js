import React from 'react';

const Title = props => {
  return (
    <div>
      <h1>Todo App</h1>
      <p>Tasks in queue: {props.tasks}</p>
    </div>
  )
}

export default Title;