import { useState } from 'react';
import './App.scss'

export function App() {
    const [counter, setCounter] = useState<number>(0);

    const increment = () => setCounter(prev => prev + 1);

    return (<div>
        <h1>{counter}</h1>
        <button onClick={increment}><span>increment</span></button>
    </div>);
}