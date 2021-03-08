import Head from 'next/head';
import {useEffect, useState} from "react";
import {findManyTasks} from "../models/tasks";
import {startLoading, finishLoading} from "../utils/ui";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        startLoading();

        findManyTasks().then(data => {
            console.log(data);

            setTasks(data)
        }).finally(() => finishLoading());
    }, []);

    return (
        <div>
            <Head>
                <title>Firebase Todo App</title>
            </Head>

            <h1>Tasks</h1>

            {tasks.map(task => <p key={task.id}>{task.name}</p>)}
        </div>
    );
}
