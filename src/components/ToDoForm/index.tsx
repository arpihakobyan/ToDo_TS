import React, { FC } from "react";
import { useState } from "react";

interface Props {
    onAddBtn: (value: string) => void
}

const ToDoForm: FC<Props> = ({ onAddBtn }) => {
    const [value, setValue] = useState<string>('')
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }
    const onBtn = () :void => {
        onAddBtn(value)
    }
    return (
        <>
            <input type='text' placeholder='typa a todo' onChange={onInputChange} />
            <button onClick = {onBtn}  >Add a todo</button>
        </>
    )
}
export default ToDoForm