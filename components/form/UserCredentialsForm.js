import {Button, Form} from "react-bootstrap";
import Link from "next/link";
import {useState} from "react";

const UserCredentialsForm = ({ cancelRoute, handleCredentials, isRegister = false }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const clearForm = () => {
        setPassword('');
        setEmail('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handleCredentials({
            email,
            password,
        });

        clearForm();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="taskName">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Email address"
                />
                <Form.Text className="text-muted">
                    Email address
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="taskName">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type={"password"}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Password"
                />
                <Form.Text className="text-muted">
                    Secure password
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Link href={cancelRoute} passHref>
                    <Button type={"button"} className={"mr-1"} variant={"secondary"}>Cancel</Button>
                </Link>

                <Button variant="success" type="submit">
                    {isRegister ? 'Register' : 'Login' }
                </Button>
            </Form.Group>
        </Form>
    );
};

export default UserCredentialsForm;