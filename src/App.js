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

  // Khi nào blur thì nó lưu lại
  onEditTodo = (todo = {}, index = -1) => { // Gửi todo  và index qua todo.jsx đở phải đi kiếm
    if (index >= 0) { // Kiểm tra nếu index nằm trong list thì mình update
      const { todoList: list } = this.state // Gắn biến todoList qua biến list 
      list.splice(index, 1, todo) // Tại phần tử index đó mình thay phần từ đố (1) bằng todo mới
      this.setState({
        todoList: list,
        todoEditingId: '' // Remove id
      }) // mình set lại state lại
    }
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
        onEditTodo={this.onEditTodo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
