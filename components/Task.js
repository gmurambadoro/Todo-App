import {Card, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {ClickableStyles} from "./Styles";

const Task = ({ task, handleDelete, handleDone }) => {
    const [done, setDone] = useState(task.done);

    const handleChange = event => {
        event.preventDefault();

        const isDone = !!event.target.checked;

        setDone(isDone);

        handleDone(task.id, isDone);
    };

    return (
        <Card className={"mb-1"}>
            <Card.Body>
                <Row>
                    <Col md={10}>
                        <p>
                            {task.done ? (<strike>{task.name}</strike>) : task.name}
                        </p>

                        {task.description && <p><span className={"text-muted small"}>{task.description}</span></p>}
                    </Col>
                    <Col>
                        <Form.Check
                            className={"float-right"}
                            checked={done}
                            onChange={handleChange}
                            type={"checkbox"}
                        />
                    </Col>

                    <Col>
                        <ClickableStyles className={"text-danger float-right"}>
                            <span
                                className={"small"}
                                onClick={() => {
                                    if (confirm(`Are you sure you want to delete Task # ${task.id}`)) {
                                        handleDelete(task.id);
                                    }
                                }}>
                                <strong>&times;</strong>
                            </span>
                        </ClickableStyles>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
};

export default Task;