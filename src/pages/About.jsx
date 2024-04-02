import {useState} from 'react';
export default function Pages() {
    const [name, list] = useState('');
    const [todo,Todolist] = useState([]);
    let id = 0;
    return(
        <>
        <h1>Todolist</h1>
        <input value = {name} onChange = {e => list(e.target.value)} />
        <button type = 'button' onClick={() => Todolist([...todo, { id: id++, name: name}])}> Add</button>
        <ul> 
            {todo.map (names => (
                <li key = {names.id}>{names.name}</li>
            ))}
        </ul>
        </>
    )
}