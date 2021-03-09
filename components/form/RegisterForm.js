import {Button, Form} from "react-bootstrap";
import Link from "next/link";
import {useState} from "react";

const RegisterForm = ({ cancelRoute, handleRegisterUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const clearForm = () => {
        setPassword('');
        setEmail('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handleRegisterUser({
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
                    placeholder="Email"
                />
                <Form.Text className="text-muted">
                    Email address - will be used to login
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
                    Register
                </Button>
            </Form.Group>
        </Form>
    );
};

export default RegisterForm;