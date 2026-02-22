import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Modal from './components/Modal';
import { useState } from 'react';
import Task from './components/Task';

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
    {text: "Полить цветы", done: false},
    {text: "Сходить в магазин", done: false},
    {text: "Помыть посуду", done: false},
    {text: "Покормить кота", done: false}
    ]);
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
    {
      tasks.map
      (
        (task, index) => <Task key={index} task={task}/>
      )
    }
    </div>
  );
}

export default App;
