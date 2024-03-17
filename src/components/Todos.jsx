import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const [updatedText, setUpdatedText] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const todos = useSelector(state => state.todoReducer.todos);
    const dispatch = useDispatch();

    const handleUpdate = (id) => {
        if (updatedText.trim() !== "") {
            dispatch(updateTodo({ id: id, text: updatedText }));
            setUpdatedText("");
            setIsEdit(false); // Disable edit mode after updating
        }
    };

    return (
        <div style={{ margin: '20px' }}>
            <h2>Todos</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ marginBottom: '10px' }}>
                        {isEdit ? (
                            <input type="text" value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} style={{ marginRight: '10px' }} />
                        ) : (
                            <span>{todo.text}</span>
                        )}
                        <div style={{ display: 'inline-block' }}>
                            <button style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', fontSize: '16px', marginRight: '5px', cursor: 'pointer' }} onClick={() => {
                                if(isEdit) {
                                    handleUpdate(todo.id);
                                } else {
                                    setIsEdit(true);
                                    setUpdatedText(todo.text); // Pre-fill input with current text
                                }
                            }}>
                                {isEdit ? "Save" : "Edit"}
                            </button>
                            <button style={{ backgroundColor: '#f44336', border: 'none', color: 'white', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', fontSize: '16px', cursor: 'pointer' }} onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
