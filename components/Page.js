import React from "react";
import Link from "next/link";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {PROJECT_NAME} from "../config/app-config";

const Page = ({ children }) => {
    return (
        <React.Fragment>
            <header>
                <Navbar bg="light" expand="lg" className={"mb-2"}>
                    <Navbar.Brand as={"span"}>{PROJECT_NAME}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link href={"/"} passHref>
                                <Nav.Link>Tasks</Nav.Link>
                            </Link>
                            <Link href={"/register"} passHref>
                                <Nav.Link>Register</Nav.Link>
                            </Link>
                        </Nav>
                        <Link href={"/tasks/new"} passHref>
                            <Button type={"button"} variant="outline-secondary">Add Task</Button>
                        </Link>
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