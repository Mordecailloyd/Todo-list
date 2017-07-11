import React from 'react';
import {uniqueId} from '../../util/unique_id';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      id: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    // console.log(this);
    todo.id = uniqueId();
    this.props.receiveTodo(todo);
  }

  update (property) {
    return (event)=>{
      this.setState({[property]: event.target.value});
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={this.update("title")} />
        <label>Body</label>
        <input type="text" onChange={this.update("body")} />
        <input type="submit" value="Submit Form" />
      </form>

    );
  }
}


export default TodoForm;
