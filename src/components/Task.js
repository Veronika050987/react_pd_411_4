import './Task.css';

function Task(props)
{
    return(
    <div className='task'>
        {props.task.text}
    </div>
    )
}
export default Task;