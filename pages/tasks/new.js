import AddTaskForm from "../../components/form/AddTaskForm";
import Page from "../../components/Page";
import {PageHeaderStyles} from "../../components/Styles";
import {doneLoading, startLoading} from "../../utils/ui";
import {createTask} from "../../models/tasks";
import {useRouter} from "next/router";
import PleaseLogin from "../../components/PleaseLogin";

const NewTask = () => {
    const router = useRouter();

    const handleTaskAdded = task => {
        startLoading();

        createTask(task).then(() => {
            doneLoading();

            router.push('/').finally();
        });
    };

    return (
        <PleaseLogin>
            <Page>
                <PageHeaderStyles>Add Task</PageHeaderStyles>

                <hr />

                <AddTaskForm onTaskAdded={handleTaskAdded} />
            </Page>
        </PleaseLogin>
    );
};

export default NewTask;