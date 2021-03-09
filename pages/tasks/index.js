import {useEffect, useState} from "react";
import {doneLoading, startLoading} from "../../utils/ui";
import {deleteTask, findTasks, updateTaskStatus} from "../../models/tasks";
import Task from "../../components/Task";
import Page from "../../components/Page";
import {PageHeaderStyles} from "../../components/Styles";
import PleaseLogin from "../../components/PleaseLogin";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const refresh = () => {
        startLoading();

        findTasks()
            .then(data => {
                data.sort((prev, next) => {
                    if (prev.done) {
                        return 1;
                    }

                    return -1;
                });

                data.sort((prev, next) => {
                    if (prev.createdAt < next.createdAt) {
                        return 1;
                    }

                    if (prev.createdAt > next.createdAt) {
                        return -1;
                    }

                    return 0;
                });

                setTasks([...data])
            })
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

    const handleTaskStatusChanged = (id, isDone) => {
        startLoading();

        updateTaskStatus(id, isDone).finally(() => {
            doneLoading();

            refresh();
        })
    };

    return (
        <PleaseLogin>
            <Page>
                <PageHeaderStyles>Tasks</PageHeaderStyles>

                {tasks.map(task => <Task key={task.id} task={task} handleDelete={handleDeleteTask} handleDone={handleTaskStatusChanged} />)}

                {!tasks.length && <p>There are no tasks!</p>}
            </Page>
        </PleaseLogin>
    );
};

export default Tasks;