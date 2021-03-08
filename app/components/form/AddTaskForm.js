import {Button, Form} from "react-bootstrap";
import {useState} from "react";

const AddTaskForm = ({ onTaskAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);

    const clearForm = () => {};

    const handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            name,
            description,
            done,
        };

        onTaskAdded(task);

        clearForm();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="taskName">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    required
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Title"
                />
                <Form.Text className="text-muted">
                    The title of the task - should be descriptive enough to know what it is
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="taskDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    as={"textarea"}
                    rows={3}
                    placeholder="Details about the task" />
                <Form.Text className="text-muted">
                    Additional information about the task e.g. steps to take, links to follow.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="taskCompleted">
                <Form.Check
                    value={done}
                    onChange={event => setDone(!!event.target.checked)}
                    type="checkbox"
                    label="Task completed" />
            </Form.Group>

            <Button variant="success" type="submit">
                Save
            </Button>
        </Form>
    );
};

export default AddTaskForm;