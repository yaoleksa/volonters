import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBarMenu extends React.Component {
    render() {
      return (
        <Navbar bg="dark" variant="dark" expand="lg" lang="ua">
        <Container fluid>
          <Navbar.Brand href="#">Головна</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link className="navbar_link" href="./pages/accounts.html">Рахунки</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/team.html">Команда</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/docs.html">Документація фонду</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/reports.html">Звітність</Nav.Link>
              <Nav.Link className="navbar_link" href="./pages/photo.html">Фотозвіти</Nav.Link>
            </Nav>
            <Form className="d-flex">
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>);
    }
}
class Contant extends React.Component {
  render() {
    return (<div>
           <p className="text">Наші цілі:</p>
           <p className='text'>Вставити відповідний текст</p>
          <img id="image" src="img/Army_SOS_logo.png"/>
        </div>);
  }
}
class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <p id="header">Наші контакти:</p>
        <p className='footer_text'>електронна пошта</p>
        <p className='footer_text'>Телефон</p>
        <p className='footer_text'>Де ми знаходимось:</p>
        <p className='footer_text'>Адреса</p>
      </footer>
    );
  }
}

export { NavBarMenu, Contant, Footer };