import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
font-size: 50px;
`;

const Input = styled.input`
  font-size: 15px;
  height: 30px;
  width: 300px;
  border-radius: 4px;
  text-align: center;
`;

const Button = styled.button`
  borderRadius: 6px;
  height: 40px;
  width: 150px;
  fontSize:20px;
  border-radius: 4px;
  margin: 20px;
`;



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            BASIC-TODO
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
        <Div>
          <div>
            TODO
        </div>
          <Input type="text" onChange={this.handleChange}  value={this.state.text}  placeholder="Title"/>
          <Button >ADD</Button> 
        </Div>
       <TodoList items={this.state.items} />
       </form>
      </div>
    );
  }

  handleChange =(e) =>{
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}


