import {useRouter} from "next/router";
import {PageHeaderStyles} from "../../components/Styles";
import PleaseLogin from "../../components/PleaseLogin";

const Task = () => {
    const router = useRouter();

    const { query } = router;

    // find task by id


    return (
        <PleaseLogin>
            <PageHeaderStyles>Task </PageHeaderStyles>
        </PleaseLogin>
    );
};

export default Task;