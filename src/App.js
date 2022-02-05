import './App.css';
import WelcomePageComponent from './welcomePage/welcomePageComponent';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Will Shortz</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Who?</Nav.Link>
            <Nav.Link href="#features">What?</Nav.Link>
            <Nav.Link href="#pricing">When?</Nav.Link>
            <Nav.Link href="#features">Where?</Nav.Link>
            <Nav.Link href="#pricing">Why?</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <WelcomePageComponent />
    </div>
  );
}

export default App;
