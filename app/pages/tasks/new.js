import AddTaskForm from "../../components/form/AddTaskForm";
import Page from "../../components/Page";
import {PageHeaderStyles} from "../../components/Styles";

const NewTask = () => {
    return (
        <Page>
            <PageHeaderStyles>Add Task</PageHeaderStyles>

            <hr />

            <AddTaskForm />
        </Page>
    );
};

export default NewTask;