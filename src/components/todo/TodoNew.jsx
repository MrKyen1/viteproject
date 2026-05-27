import { useState } from "react";

const TodoNew = (props) =>{
    const [valueInput,setValueInput] = useState("ki3n")
    console.log(">>>>check ", props)
    const {addNewTodo} = props;

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }
    const handleOnchange = (name) => {
        setValueInput(name)
    }
    return(
    <div className="todo-new">
        <input type="text" id="txt_box" onChange={(event) => handleOnchange(event.target.value)} value={valueInput}/>
        <button className="btn-Add" style={{cursor:"pointer"}} onClick={handleClick}>Add</button>
        <div>
            My text input is { valueInput}
        </div>
    </div>
    )
}

export default TodoNew;