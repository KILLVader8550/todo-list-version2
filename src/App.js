import React, { useRef } from 'react';
import styles from './App.module.css';

function App() {
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const addTodo = event => {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = inputRef.current.value;
    listRef.current.appendChild(li);
    li.onclick = reMoveTodo.bind(null, li);
    inputRef.current.value = '';
  }

  const reMoveTodo = el => {
    el.remove();
  }

  return (
    <div className={styles.container}>
      <form className={styles.inputContainer} onSubmit={addTodo}>
        <input type='text' placeholder='Todo...' ref={inputRef} className={styles.input} />
        <button type='submit' className={styles.button}>Add</button>
      </form>

      <div className={styles.todoContainer}>
        <ul ref={listRef} className={styles.todoList}></ul>
      </div>
    </div>
  );
}

export default App;