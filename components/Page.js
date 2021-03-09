import React from "react";
import Link from "next/link";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {PROJECT_NAME} from "../config/app-config";
import {useUser} from "../hooks/auth";
import {fire} from "../config/firebase-config";
import {useRouter} from "next/router";

const Page = ({ children }) => {
    const router = useRouter();

    const { uid } = useUser() || { uid: null };

    return (
        <React.Fragment>
            <header>
                <Navbar bg="light" expand="lg" className={"mb-2"}>
                    <Navbar.Brand as={"span"}>{PROJECT_NAME}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {uid && (
                                <>
                                    <Link href={"/"} passHref>
                                        <Nav.Link>Tasks</Nav.Link>
                                    </Link>

                                    <Nav.Link
                                        onClick={async () => {
                                            await fire.auth().signOut();

                                            await router.push('/login');
                                        }}
                                    >
                                        Logout
                                    </Nav.Link>
                                </>
                            )}

                            {!uid && (
                                <>
                                    <Link href={"/login"} passHref>
                                        <Nav.Link>Login</Nav.Link>
                                    </Link>

                                    <Link href={"/register"} passHref>
                                        <Nav.Link>Register</Nav.Link>
                                    </Link>
                                </>
                            )}
                        </Nav>
                        {uid && (
                            <Link href={"/tasks/new"} passHref>
                                <Button type={"button"} variant="outline-secondary">Add Task</Button>
                            </Link>
                        )}
                    </Navbar.Collapse>
                </Navbar>
            </header>

            <main>
                <Container>
                    {children}
                </Container>
            </main>

            <footer />

        </React.Fragment>
    );
};

export default Page;