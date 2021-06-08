import React from 'react';
import { useForm } from "react-hook-form";

export default function CreateTodo( {handleCreate} ) {
     const { register, handleSubmit } = useForm();

     
    const onSubmit = (values) => {
        handleCreate(values);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="task">Task</label>
                <input id="task" {...register("task")} />

                <label htmlFor="student">Student</label>
                <input id="student" {...register("student")} />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}
