import './App.css';
import WelcomePageComponent from './welcomePage/welcomePageComponent';
import WhoPageComponent from './whoPage/whoPageComponent';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Will Shortz</Navbar.Brand>
            </LinkContainer>
            <Nav className="">
              <LinkContainer to="whoPage">
                <Nav.Link>Who?</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#features">What?</Nav.Link>
              <Nav.Link href="#pricing">When?</Nav.Link>
              <Nav.Link href="#features">Where?</Nav.Link>
              <Nav.Link href="#pricing">Why?</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<WelcomePageComponent/>}/>
          <Route path="whoPage" element={<WhoPageComponent/>}/>
        </Routes>
      </BrowserRouter>
      {/* <WelcomePageComponent /> */}
    </div>
  );
}

export default App;
