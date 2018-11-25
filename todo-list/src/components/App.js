import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
class App extends Component {
  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 공부하기", done: true },
      { id: 1, text: "컴포넌트 스타일링 해보기", done: false }
    ]
  };

  id = 1;
  getId = () => {
    return ++this.id;
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      input: value
    });
  };

  handleInsert = () => {
    const { input, todos } = this.state;

    const newTodo = {
      id: this.getId(),
      text: input,
      doen: false
    };

    this.setState({
      todos: [...todos, newTodo],
      input: ""
    });
  };

  handleToggle = id => {
    // const { todos } = this.state;
    // const index = todos.findIndex(todo => todo.id === id);

    // const toggled = {
    //   ...todos[index],
    //   done: !todos[index].done
    // };

    // this.setState({
    //   todos: [
    //     ...todos.slice(0, index),
    //     toggled,
    //     ...todos.slice(index + 1, todos.length)
    //   ]
    // });
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle } = this;

    return (
      <PageTemplate>
        <TodoInput
          onChange={handleChange}
          value={input}
          onInsert={handleInsert}
        />
        <TodoList todos={todos} onToggle={handleToggle} />
      </PageTemplate>
    );
  }
}

export default App;
