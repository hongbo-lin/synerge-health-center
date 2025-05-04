import { useState } from "react";
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from "reactstrap";

const TopNav = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed((prev) => !prev);

    return (
        <Navbar container fixed="top" expand="lg" color="success" className="text-uppercase">
            <NavbarBrand className="text-white">Synergy Health Center</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#about" className="text-white">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#services" className="text-white">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#gallery" className="text-white">Gallery</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact" className="text-white">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default TopNav;