
const TodoData = (props)=> {

    //props là 1 object {}
    //{
    //  name:"eric",
    //  age:25,
    //}

    const {deleteTodo}=props
    const handleClick = (id) => {
        deleteTodo(id)
    }
    return(
    <div className="todo-data">
        {props.todoList.map((item,index)=>{
            return(<div key={index} className="todo-item">
                        <div>{item.name}</div>
                        <button onClick={()=>handleClick(item.id)} style={{cursor:"pointer"}}>Delete</button>
                    </div>)
        })}
    </div>
    )
}
export default TodoData;