import React from 'react';



class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this);
    this.props.receiveTodo(this.state);
    console.log(this.props);
  }

  update (property) {
    return (event)=>{
      this.setState([{[property]: event.target.value}]);
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
