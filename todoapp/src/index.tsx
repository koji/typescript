import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';

type FormElem = React.FormEvent<HTMLFormElement>

interface iToDO {
  text: string,
  complete: boolean
}

export default function App():JSX.Element  {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<iToDO[]>([]);

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault();
    addTask(value);
    setValue('');
  }

  const addTask = (text: string) => {
    const newTodo: iToDO[] = [...todos, {text, complete: false}];
    setTodos(newTodo);
  }

  const completeToDo = (index: number): void => {
    const newTodos: iToDO[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }
  
  const removeTodo = (index: number): void => {
    const newTodos: iToDO[] = [...todos];
    newTodos.splice(index, 1); // remove one
    setTodos(newTodos);

  }

  console.log(todos);
  return (
    <Fragment>
      <h1>
        ToDo list
      </h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} required />
        <button type='submit'>Add task</button>
      </form>
      <section>
        {
          todos.map((todo: iToDO, index:number)=> {
            return <Fragment>
              <div
                style={{ textDecoration: todo.complete 
                  ? 'line-through' 
                  : '' }}
              >
                {todo.text}
              </div>
              <button type='button' onClick={() => completeToDo(index)}>
                {''}
                {todo.complete ? 'Incomplete' : 'Complete'}
                {''}
              </button>
              <button type='button' onClick={()=> removeTodo(index)}>&times;</button>
            </Fragment>
          })
        }
      </section>
    </Fragment>
  )
}

const root = document.getElementById('app-root');
ReactDOM.render(<App />, root);
