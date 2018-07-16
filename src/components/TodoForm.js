import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event){
    this.props.add(this.state.value);
    event.preventDefault();
    this.setState({
      value: ''
    })
    
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label  className={style.form__label} htmlFor="todo-form">Enter todo's name</label>
        <input className={style.form__input} id="todo-form" type="text" onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.value} />
        <button className={style.form__button} type="submit">add</button>
      </form>
    )
    
  }
}
export default TodoForm;