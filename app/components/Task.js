import {Card} from "react-bootstrap";
import {ClickableStyles} from "./Styles";

const Task = ({ task }) => {
    return (
        <ClickableStyles>
            <Card className={"mb-1"}>
                <Card.Body>
                    {task.name}
                </Card.Body>
            </Card>
        </ClickableStyles>
    );
};

export default Task;