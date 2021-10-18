import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
import { logo } from "../../assets/icons";
import styles from "./Header.module.scss";
import faker from "faker";

const Header = () => {
  // const isLoggedIn = false;
  const [menuShown, setMenuShown] = useState(false);

  return (
    <Navbar expand='lg' className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={faker.image.avatar()} className={styles.mainLogo} />
        <Navbar.Brand href='#home'>CryptoWall NFT</Navbar.Brand>
      </div>

      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Nav className='me-auto'></Nav>
        <Nav
          className='mr-auto my-2 my-lg-0'
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='mr-2'
              aria-label='Search'
            />
            <Button className='mx-2'>Search</Button>
          </Form>
          <Nav.Link href='#' onMouseEnter={() => setMenuShown(true)}>
            Link
          </Nav.Link>
          <NavDropdown
            title=''
            show={menuShown}
            onMouseLeave={() => setMenuShown(false)}
          >
            <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action5'>
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='#action1'>Home</Nav.Link>
          <Nav.Link href='#action2'>Link</Nav.Link>
          <Nav.Link href='#' disabled>
            Link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
