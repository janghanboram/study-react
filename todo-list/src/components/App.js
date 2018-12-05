import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInputContainer from "../containers/TodoInputContainer";
import TodoListContainer from "../containers/TodoListContainer";
import Modal from "./Modal";

class App extends Component {
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
    return (
      <div>
        <PageTemplate>
          <TodoInputContainer />
          <TodoListContainer />
          {/* <Modal value={isEditMode} onEdit={handleEdit} /> */}
        </PageTemplate>
      </div>
    );
  }
}

export default App;
