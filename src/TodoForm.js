export const TodoForm =({text,taskValueChange,addTask}) => {
    return(
        // <div className="todo-form"</div>
        <div className="todo-form">
                <input type="text" value={text} 
                onChange={(e) => taskValueChange(e.target.value)} />
                <button onClick={() => addTask()}>Add</button>
            </div>

    );
};




