import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Modal from './components/Modal';
import { useState } from 'react';
import Task from './components/Task';
import MyImage from './images/checklist.ico';

function App() {
//   let tasks =
//     [
//     {text: "Полить цветы", done: false},
//     {text: "Сходить в магазин", done: false},
//     {text: "Помыть посуду", done: false},
//     {text: "Покормить кота", done: false}
//     ]
// ;
  let [tasks, setTasks] = useState([
    {text: "Полить цветы", done: false, icon_id: 'flower'},
    {text: "Сходить в магазин", done: false, icon_id: 'card'},
    {text: "Помыть посуду", done: false, icon_id: 'plate'},
    {text: "Покормить кота", done: false, icon_id: 'cat'}
    ]);
  
  // Функция для переключения состояния 'done' у задачи
  const toggleTaskDone = (indexToToggle) => {
    setTasks(prevTasks => 
      prevTasks.map((task, index) => 
        index === indexToToggle ? { ...task, done: !task.done } : task
      )
    );
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>    
    {/* <Counter />
    <Modal /> */}
    <h2>
      <img 
      src={MyImage}
      alt="checklist"
      style={{ width: '30px', height: '30px', marginRight: '8px' }}
      />
      My tasks list 
    </h2>
    {
      tasks.map(
        (task, index) => 
          <Task 
          key={index} 
          task={task}
          index={index} // Передаем индекс для идентификации
          onToggle={toggleTaskDone} // Передаем функцию-обработчик
        />
      )
    }
    </div>
  );
}

export default App;
