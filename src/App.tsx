import ToDoForm from './components/ToDoForm';
import { TodoInterface } from './interfaces/interfaces';
import { useStore } from 'effector-react';
import { ToDoStores } from './stores/todos/todos';
import { ToDoEvents } from './stores/todos/todos';
import ToDoItem from './components/ToDoItem';

function App() {

  const todoStore = useStore(ToDoStores.todoStores)

  const onAddBtn = (value: string) => {

    const newTodo: TodoInterface = {
      todo: value,
      checked: false
    }
    ToDoEvents.addTodo(newTodo)
  }
  const onDelete = (index: number) => {
    ToDoEvents.deleteTodo(index)
  }
  const onLined = (item: TodoInterface[]) => {
    ToDoEvents.linedTodo(item)
  }

  return (
    <>
      <ToDoForm onAddBtn={onAddBtn} />
      <ToDoItem todoStore={todoStore} onDelete={onDelete} onLined={onLined} />
    </>
  );
}

export default App;
