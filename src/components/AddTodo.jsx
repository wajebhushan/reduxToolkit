import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} style={{ marginBottom: '20px' }}>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                    padding: '8px',
                    marginRight: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                type='submit'
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
