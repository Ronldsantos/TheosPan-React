import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu'
import ProductionAdd from './Pages/ProductionAdd'
import ScheduleChart from './Pages/ScheduleChart'
import SellingReport from './Pages/SellingReport'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Splash from './Pages/Splash'
import Playground from './Pages/Playground'

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes
} from "react-router-dom"




function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Router>
        <Routes>
          <Route exact path = "/" element={<Splash />}/ >
          <Route exaxt path = "/playground" element = {<Playground />} />
          <Route exact path = "/production" element={<ProductionAdd />}/ >
          <Route exact path = "/schedule" element={<ScheduleChart />}/ >
          <Route exact path = "/selling" element={<SellingReport />}/ >
        </Routes>
      </Router>
</div>
  );
}

export default App;
