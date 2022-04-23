import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
//import FormControl from 'react-bootstrap/FormControl';


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
              <Nav.Link className="navbar_link" href="#action1">Рахунки</Nav.Link>
              <Nav.Link className="navbar_link" href="#action2">Команда</Nav.Link>
              <Nav.Link className="navbar_link" href="#action3">документація фонду</Nav.Link>
              <Nav.Link className="navbar_link" href="#action4">Звітність</Nav.Link>
              <Nav.Link className="navbar_link" href="#action5">Фотозвіти</Nav.Link>
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
class App extends React.Component {
  render() {
    return (
      <>
      <NavBarMenu />
      <Contant />
      </>);
  }
}
ReactDom.createRoot(document.getElementById('root')).render(<App />);