import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "../Asserts/logo (2).png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  customizeToolbar: {
    minHeight: 10,
    backgroundColor: "white",
  },

  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    //   fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img style={{ height: "100%", width: "30%" }} src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Explore Pakistan</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/hotels/:page/:perPage">Hotels</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/tours">Tours</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/Become_a_host">Become a Host</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/hotel/compare">Compare Hotels</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/itinerary/:page/:perPage">Itineray</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Dashboards
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/admin-dashboard">Admin</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/user-dashboard">User</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/guide-dashboard">Guide</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/Blog">Explore Our Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/travel-packages">Packages</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink
              style={{
                backgroundColor: "#219F4D",
                borderRadius: 15,
                color: "white",
                marginRight: 10,
              }}
              href="/sign-up"
            >
              Register
            </NavLink>
          </NavbarText>
          <NavbarText>
            <NavLink
              style={{
                backgroundColor: "#216B9F",
                borderRadius: 15,
                color: "white",
                marginRight: 10,
              }}
              href="/login" 
            >
              Login
            </NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>

      {/* <ul>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/"> Home </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/products"> Products </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/contactus"> Contact Us </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/login"> Login </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Button varient="containd" color="secondary">
            SignUp
          </Button>
        </li>
      </ul> */}
      {/* <AppBar
        position="fixed"
        color="primary"
        //position="fixed"
        //className={classes.appBar}
      >
        <Toolbar className={classes.customizeToolbar}>
          <img
            src={logo}
            style={{
              height: "100px",
              paddingRight: "3rem",
              paddingLeft: "2rem",
            }}
            alt="cover"
          />
          <Typography variant="h6">
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/products" className={classes.link}>
              Places To Visit In Pakistan
            </Link>
            <Link to="/contact-us" className={classes.link}>
              Contact Us
            </Link>
            <Link to="/about-us" className={classes.link}>
              About Us
            </Link>
            <Link to="/hotels/:page/:perPage" className={classes.link}>
              Hotels
            </Link>
            <Link to="/tours" className={classes.link}>
              Tours
            </Link>
            <Link to="/Become_a_host" className={classes.link}>
              Become A Host
            </Link>
            <Link to="/Blog" className={classes.link}>
              Blog
            </Link>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
            <Link to="/sign-up" className={classes.link}>
              Register
            </Link>
            <Link to="/itinerary/:page/:perPage" className={classes.link}>
              Itinerary
            </Link>
            <Link to="/hotel/compare" className={classes.link}>
              Compare Hotels
            </Link>
            <Link to = "/admin-dashboard" className={classes.link}>
              Admin Dashboard          
            </Link>
            <Link to = "/user-dashboard" className={classes.link}>
              User Dashboard          
            </Link>
            <Link to = "/guide-dashboard" className={classes.link}>
              Guide Dashboard          
            </Link>

          </Typography>
        </Toolbar>
      </AppBar> */}
    </div>
  );
};

export default TopMenu;
