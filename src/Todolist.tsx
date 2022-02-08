import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask:(title: string)=>void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')


    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onclickHandler =()=>{
        props.addTask(title);
       setTitle('')
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onChange={onChangeHandler} value={title}/>
            <button onClick={()=>props.addTask(title)}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ onclickHandler}>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={ () => { props.changeFilter("all") } }>
                All
            </button>
            <button onClick={ () => { props.changeFilter("active") } }>
                Active
            </button>
            <button onClick={ () => { props.changeFilter("completed") } }>
                Completed
            </button>
        </div>
    </div>
}
