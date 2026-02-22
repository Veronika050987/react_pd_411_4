import './Task.css';
import React from 'react';

const getIcons = (id, isDone) => {
    // Мы используем require, чтобы React мог скомпилировать эти импорты
    // в зависимости от значения переменной icon_id.
    const base = `../images/`;
    
    try {
        if (isDone) {
            return require(`../images/${id}_happy.jpg`);
        } else {
            return require(`../images/${id}_sad.jpg`);
        }
    } catch (error) {
        // Если файл не найден (например, вы не добавили картинку),
        // верните заглушку или бросьте ошибку.
        console.error(`Icon not found for ID: ${id}, Done: ${isDone}`, error);
        // Возвращаем null, чтобы избежать падения рендера, если картинка отсутствует
        return null; 
    }
};

const Task = ({ task, index, onToggle }) => {
  
  const handleClick = () => {
    onToggle(index);
  };

  const taskTextStyle = task.done ? 'task-text done' : 'task-text';

  // Получаем нужный импортированный путь к картинке
  const IconSource = getIcons(task.icon_id, task.done);
  const altText = task.done ? "Выполнено" : "Не выполнено";

  return (
    <div className="task-container">
      
      {/* Текст задачи */}
      <span className={taskTextStyle}>
        {task.text}
      </span>
      
      {/* Кнопка */}
      <button 
        onClick={handleClick}
        className="task-button"
      >
        {task.done ? 'Отменить' : 'Выполнить'}
      </button>

      {/* Зеленая галочка (отображается, только если задача выполнена) */}
      {task.done && (
        <span className="task-checkmark" title="Выполнено">✓</span>
      )}

      {/* Отображаем картинку, только если она успешно загружена */}
      {IconSource && (
        <img 
            src={IconSource} 
            alt={altText} 
            className="task-icon"
        />
      )}

    </div>
  );
};

export default Task;