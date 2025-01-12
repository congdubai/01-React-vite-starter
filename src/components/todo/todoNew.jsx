import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState();

    const { addNewTodo } = props

    const handleOnChange = (int) => {
        setValueInput(int)
    }

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} value={valueInput} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default TodoNew;