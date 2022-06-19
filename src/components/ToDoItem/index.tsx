import { FC } from "react";
import { TodoInterface } from "../../interfaces/interfaces";

interface Props {
    todoStore: TodoInterface[];
    onDelete: (index: number) => void;
    onLined: (item: TodoInterface[]) => void


}


const ToDoItem: FC<Props> = ({ todoStore, onDelete, onLined }) => {
    const onDeleteBtn = (index: number) => {
        onDelete(index)
    }
    const onLinedBtn = (item: TodoInterface[]) => {
        onLined(item)
    }


    return (
        <>
            {todoStore.map((item, index) =>
                <div key={index}>
                    <button className={item.checked ? 'line' : ''} onClick={() => {

                        item.checked = !item.checked
                       
                        onLinedBtn(todoStore)
                    }}>{item.todo}</button>
                    <button onClick={() => {
                        onDeleteBtn(index)
                    }}>x</button>
                </div>
            )
            }
        </>
    )


}
export default ToDoItem