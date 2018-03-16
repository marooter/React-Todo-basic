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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }

  hanclickDelete = (itemDelete) => {
    const newItems = this.state.items.filter((_item) => {
      return _item !== itemDelete
    });
    this.setState({items: newItems})
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
       <TodoList items={this.state.items} hanclickDelete={this.hanclickDelete.bind(this)} />
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

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <p key={item.id}>{item.text}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.props.hanclickDelete.bind(null,item)}>Delete</button>
          </p>
        ))}
      </ul>
    );
  }
}


