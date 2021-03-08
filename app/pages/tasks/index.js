import {useEffect, useState} from "react";
import {doneLoading, startLoading} from "../../utils/ui";
import {findTasks} from "../../models/tasks";
import Task from "../../components/Task";
import Page from "../../components/Page";
import {PageHeaderStyles} from "../../components/Styles";

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
            <PageHeaderStyles>Tasks</PageHeaderStyles>

            {tasks.map(task => <Task key={task.id} task={task} />)}
        </Page>
    );
};

export default Tasks;