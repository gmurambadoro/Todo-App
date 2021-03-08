import Head from 'next/head';
import {useEffect, useState} from "react";
import {createOneTask, findManyTasks} from "../models/tasks";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        findManyTasks().then(data => setTasks(data));
    }, []);

    console.log(tasks);

    return (
        <div>
            <Head>
                <title>Firebase Todo App</title>
            </Head>
            Hello, world!
        </div>
    );
}
