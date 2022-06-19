import { createEvent, createStore } from "effector";
import { TodoInterface } from "../../interfaces/interfaces";

// * events

const addTodo = createEvent<TodoInterface>()
const deleteTodo = createEvent<number>()
const linedTodo = createEvent<TodoInterface[]>()


// * stores

const todoStores = createStore<TodoInterface[] | []>([])
    .on(addTodo, (state: TodoInterface[] | [], payload: TodoInterface): TodoInterface[] => [...state, payload])
    .on(deleteTodo, (state, payload) => state.filter((_, index) => index !== payload))
    .on(linedTodo, (_, payload) => [...payload])


// * exports

export const ToDoEvents = {
    addTodo,
    deleteTodo,
    linedTodo

}
export const ToDoStores = {
    todoStores
}