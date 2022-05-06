import React, { PureComponent } from 'react';
//css
import './App.css';
import './css/Todo.css';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

const isNotCheckAll = (todos = []) => todos.find(todo => !todo.isCompleted) 
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
      const { todosList: list } = this.state // Gắn biến todosList qua biến list 
      list.splice(index, 1, todo) // Tại phần tử index đó mình thay phần từ đố (1) bằng todo mới
      this.setState({
        todosList: list,
        todoEditingId: '' // Remove id để nó ko tìm ra chính cái đó đang edit
      }) // mình set lại state lại
    }
  }

  markCompleted = (id = '') => { // Muốn biết markCompleted cái nào thì mình phải truyền id qua
     this.setState(preState => ({
       todosList: preState.todosList.map(todo => todo.id ===id ? ({ ...todo, isCompleted: !todo.isCompleted}) : todo) // Nếu chưa mark thì để ngược lại
     }))
  }

  render() {
    const { todosList, todoEditingId } = this.state
    return (
      <div className='todoapp'>
        <Header addTodo={this.addTodo}/>
        <TodoList 
        todosList={todosList} 
        getTodoEditingId={this.getTodoEditingId}
        todoEditingId={todoEditingId}
        onEditTodo={this.onEditTodo}
        markCompleted={this.markCompleted}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
