import {useEffect, useState} from "react";
import {doneLoading, startLoading} from "../../utils/ui";
import {findTasks} from "../../models/tasks";
import Task from "../../components/Task";
import Page from "../../components/Page";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        startLoading();

        findTasks()
            .then(data => setTasks([...data]))
            .finally(() => doneLoading());
    }, []);

    return (
        <Page>
            <h3>Tasks</h3>

            {tasks.map(task => <Task key={task.id} task={task} />)}
        </Page>
    );
};

export default Tasks;