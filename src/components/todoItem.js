const TodoItem = ({task, student, id, handleDelete, handlePut, isCompleted}) => {
    return (
        <>
            <li>
                Task: {task} <br/> Student: {student} 
            </li>
            
            <input type="checkbox" 
                   checked={isCompleted}
                   onChange={() => {
                        handlePut({
                            task,
                            student,
                            id,
                            isCompleted: !isCompleted
                        })
                   }}
            />
            
            <button onClick={()=> {
                handleDelete(id);
            }} >DELETE</button>
        </>
    )
}

export default TodoItem;