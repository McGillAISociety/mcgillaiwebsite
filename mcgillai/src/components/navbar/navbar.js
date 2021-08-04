import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from '@emotion/styled';

const Container = styled('div')``;

const NavbarContent = styled('div')``;

const BlogLink = styled('a')`
    display: inline-block;
    margin-top: 4.75px;
    margin-left: 0.5px;
`;

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false,
        };
        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.clickedNav = this.clickedNav.bind(this);
    }

    setNavExpanded(expanded) {
        this.setState({ navExpanded: expanded });
    }

    closeNav() {
        this.setState({ navExpanded: false });
    }

    scrollToTop() {
        window.scrollTo({ top: 0 });
    }

    clickedNav() {
        this.closeNav();
        this.scrollToTop();
    }

    render() {
        return (
            <Container>
                <NavbarContent>
                    <Navbar
                        collapseOnSelect
                        style={{ marginBottom: '0' }}
                        inverse={true}
                        onToggle={this.setNavExpanded}
                        expanded={this.state.navExpanded}
                        expand="md"
                        bg="dark"
                        className="navbarcustom navbar-toggleable-lg navbar-fixed-top"
                    >
                        <Navbar.Brand>
                            <Link to="/">
                                <img
                                    src="/logo.svg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                    alt="McGillAI logo"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            className="navtext"
                        />
                        <Navbar.Collapse
                            className="navbar-collapse"
                            id="basic-navbar-nav"
                        >
                            <Nav onSelect={this.clickedNav} className="mr-auto">
                                <NavDropdown
                                    title={
                                        <Navbar.Text className="navtext">
                                            About Us{' '}
                                            <i className="fa fa-angle-down"></i>
                                        </Navbar.Text>
                                    }
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item>
                                        <Link to="/ourteam" id="dropLink">
                                            <Navbar.Text
                                                className="droptext"
                                                onClick={this.clickedNav}
                                            >
                                                <i className="fa fa-user fa-fw"></i>{' '}
                                                Our Team
                                            </Navbar.Text>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/faq">
                                            <Navbar.Text
                                                className="droptext"
                                                onClick={this.clickedNav}
                                            >
                                                <i className="fa fa-info fa-fw"></i>{' '}
                                                FAQ
                                            </Navbar.Text>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        target="_blank"
                                        href="https://medium.com/mcgill-artificial-intelligence-review"
                                        rel="noopener"
                                        className="navLink"
                                    >
                                        <Navbar.Text className="external-text">
                                            <i className="fa fa-medium fa-fw"></i>{' '}
                                            Blog
                                        </Navbar.Text>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link>
                                    <Link to="/mais202">
                                        <Navbar.Text
                                            className="navtext"
                                            onClick={this.clickedNav}
                                        >
                                            MAIS 202
                                        </Navbar.Text>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/podcast">
                                        <Navbar.Text
                                            className="navtext"
                                            onClick={this.clickedNav}
                                        >
                                            Podcast
                                        </Navbar.Text>
                                    </Link>
                                </Nav.Link>
                                <NavDropdown
                                    title={
                                        <Navbar.Text className="navtext">
                                            Events{' '}
                                            <i className="fa fa-angle-down"></i>
                                        </Navbar.Text>
                                    }
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item
                                        target="_blank"
                                        href="http://maishacks.com/"
                                        rel="noopener"
                                        className="navLink"
                                    >
                                        <Navbar.Text className="droptext">
                                            <i className="fa fa-lightbulb-o fa-fw"></i>{' '}
                                            MAIS Hacks
                                        </Navbar.Text>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        target="_blank"
                                        href="http://mcgillailearn.com/"
                                        rel="noopener"
                                        className="navLink"
                                    >
                                        <Navbar.Text className="droptext">
                                            <i className="fa fa-cogs fa-fw"></i>{' '}
                                            Learnathon Conference
                                        </Navbar.Text>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link>
                                    <Link to="/mtlai">
                                        <Navbar.Text
                                            className="navtext"
                                            onClick={this.clickedNav}
                                        >
                                            MTL AI Resources
                                        </Navbar.Text>
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </NavbarContent>
            </Container>
        );
    }
}

export default Navigation;
