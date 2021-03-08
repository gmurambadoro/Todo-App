import {useEffect, useState} from "react";
import {doneLoading, startLoading} from "../../utils/ui";
import {deleteTask, findTasks} from "../../models/tasks";
import Task from "../../components/Task";
import Page from "../../components/Page";
import {PageHeaderStyles} from "../../components/Styles";
import {useRouter} from "next/router";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const router = useRouter();

    const refresh = () => {
        startLoading();

        findTasks()
            .then(data => setTasks([...data]))
            .finally(() => doneLoading());
    };

    useEffect(() => refresh(), []);

    const handleDeleteTask = (id) => {
        startLoading();

        deleteTask(id).finally(() => {
            doneLoading();

            refresh();
        });
    };

    return (
        <Page>
            <PageHeaderStyles>Tasks</PageHeaderStyles>

            {tasks.map(task => <Task key={task.id} task={task} handleDelete={handleDeleteTask} />)}
        </Page>
    );
};

export default Tasks;