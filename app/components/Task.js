import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

const Task = ({ task, handleDelete }) => {
    const [done, setDone] = useState(!!task.done);

    const handleChange = event => {
        event.preventDefault();

        const isDone = !!event.target.checked;

        setDone(isDone);

        // submit done status
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
                        <Button
                            className={"small"}
                            variant={"danger"}
                            type={"button"}
                            onClick={() => {
                                if (confirm(`Are you sure you want to delete Task # ${task.id + ' - ' + task.name}`)) {
                                    handleDelete(task.id);
                                }
                            }}>
                            &times;
                        </Button>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
};

export default Task;