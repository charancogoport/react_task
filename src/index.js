import React, { useState } from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoFilter } from "./TodoFilter";


// let text = "initisl text";
function App() {
    // let text = "initial text"
    const [text, setText] = useState("initial text");
    const [tasks, setTasks] = useState([]); //stores all the text values and gives id and status to those text values.
    const [filter, setFilter] = useState('All');
    const taskValueChange = (val) => {

        setText(val);
    };


    const addTask = () => {
        setTasks([...tasks, { id: nanoid(), name: text, status: 0 }]); //add all the tasks and gives a id and name to every task
        setText("");
    }

    // Deleting a task by id
    const deleteTask = (id) => {

        const tasks_array = tasks.filter(task => task.id !== id);

        setTasks(tasks_array);
    }

    // const [num, setNum] = useState(0);

    // const [limit, setLimit] = useState(100);

    // const addNum = () => {

    //     if (limit !== 0) {
    //         setNum(num + 1);
    //         setLimit(limit - (10));
    //     }

    // }

    // const subNum = () => {

    //     if (num > 0) {
    //         setNum(num - 1);
    //         setLimit(limit + (10));
    //     }




    // }

    

    const onChecked = (id) => {

        setTasks(tasks.map(task => {
            if (task.id === id) {
                if (task.status === 0) {
                    task.status = 1;
                    // document.getElementById(task.id).classList.toggle("cross");
                } else {
                    task.status = 0
                }
            }
            return task;
        }))



        // setTimeout(function(){
        // console.log(tasks);
        // }, 2000);
    }

    const showAll = () => {
        setFilter('All')
    }

    const showPending = () => {
        setFilter('Pending');
    }

    const showDone = () => {
        setFilter("Done")
    }


    return (
        <>
        <TodoForm
        addTask={addTask}
        taskValueChange={taskValueChange}
        text={text}
        />
            <br />

            <TodoFilter
            showAll={showAll}
            showDone={showDone}
            showPending={showPending}
            />



            <TodoList
            // jnacjkn
            onChecked={onChecked}
            deleteTask={deleteTask}
            tasks={tasks}
            filter={filter}
            />



            {/* Code for Increament and decreament */}
            {/* <div>
                <button onClick={() => subNum()}>-</button>
                <input type="text" value={num} />
                <button onClick={() => addNum()}>+</button>
                <p>Rs 10 per item</p>
                <br />
                <input type="text" value={limit}></input>
            </div> */}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));