import './Counter.css';
import {useState} from 'react';

function Counter()
{
    let [cnt, setValue] = useState(0);
    
    let increment = () => setValue(cnt+1);
    let decrement = () => setValue(cnt-1);

    return(
        <div id="counter">
            <h2>Counter: {cnt}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default Counter;