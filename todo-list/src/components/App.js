import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Modal from "./Modal";

const initialTodos = new Array(5).fill(0).map(
  (foo, index) =>({id: index, text: `일정 ${index}`, done: false})
);

class App extends Component {
  state = {
    input: "",
    todos: initialTodos, 
    // [
    //   { id: 0, text: "리액트 공부하기", done: true },
    //   { id: 1, text: "컴포넌트 스타일링 해보기", done: false }
    // ],
    // isEditMode: false,
    // editId: 0
  };

  id = 5;
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
    const { todos, input } = this.state;
    const newTodo = { text: input, done: false, id: this.getId() };

    this.setState({
      todos: [...todos, newTodo],
      input: ""
    });
  };

  handleToggle = id => {
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

  handleRemove = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    });
  };

  // handleTriggerEdit = id => {
  //   this.setState({
  //     isEditMode: true,
  //     editId: id
  //   })
  // };
  // handleEdit = (isEdit,input) =>{
  //   this.setState({
  //     isEditMode: false,
  //   });
  // }
  // updateEditItem= id=>{
  //   const { todos, editId } = this.state;
  //   const  index = todos.findIndex(todo => todo.id === editId);
    
  //   if(isEdit){
  //     this.setState({
  //       todos: [
  //         ...todos.slice(0, index),
  //         input,
  //         ...todos.slice(index + 1, todos.length)
  //       ]
  //     });
  //   }
  // }

  render() {
    const { input, todos, isEditMode } = this.state;

    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove,
      // handleTriggerEdit,
      // handleEdit,
      // updateEditItem
    } = this;

    return (
      <div>
        <PageTemplate>
          <TodoInput
            onChange={handleChange}
            onInsert={handleInsert}
            value={input}
          />
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
            // onTriggerEdit={handleTriggerEdit}
            // onEdit={updateEditItem}
          />
          <Modal value={isEditMode} 
          // onEdit={handleEdit}
          />
        </PageTemplate>
      </div>
    );
  }
}

export default App;
