import {Card} from "react-bootstrap";

const Task = ({ task }) => {
    return (
        <Card className={"mb-1"}>
            <Card.Body>{task.name}</Card.Body>
        </Card>
    );
};

export default Task;