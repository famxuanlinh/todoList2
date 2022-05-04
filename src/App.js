import React, { PureComponent } from 'react';
//css
import './App.css';
import './css/Todo.css';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';


class App extends PureComponent { //PureComponent để tự check thay đổi rồi tự cập nhật. 
  // Thay vì mỗi Component thì nó chỉ check đc 1 lớp (Nhiều lớp object ko check đc)
  state = {
    todosList: [{
      id: 1,
      text: 'todo 1',
      isCompleted: true
    }, {
      id: 2,
      text: 'todo 2',
      isCompleted: false
    }],
    //Để sửa todo
    todoEditingId:''
  }
  // Thêm todo vào todoList
  addTodo = (todo ={}) => {
      this.setState(preState => ({
        todosList: [...preState.todosList, todo]
      }))
  }

  // Muốn edit todo thì mình lưu vào state
  getTodoEditingId = (id = '') => { //Chuyền id qua để edit
    this.setState({ todoEditingId: id })
  }

  render() {
    const { todosList } = this.state
    return (
      <div className='todoapp'>
        <Header addTodo={this.addTodo}/>
        <TodoList 
        todosList={todosList} 
        getTodoEditingId={this.getTodoEditingId}
        todoEditingId={this.todoEditingId}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
