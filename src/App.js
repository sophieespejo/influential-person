import './App.css';
import WelcomePageComponent from './welcomePage/welcomePageComponent';
import WhoPageComponent from './whoPage/whoPageComponent';
import WhatPageComponent from './whatPage/whatPageComponent';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
                <Navbar.Brand>🅆🄸🄻🄻 🅂🄷🄾🅁🅃🅉</Navbar.Brand>
            </LinkContainer>
            <Nav className="">
              <LinkContainer to="whoPage">
                <Nav.Link>Who</Nav.Link>
              </LinkContainer>
              <LinkContainer to="whatPage">
                <Nav.Link>What</Nav.Link>
              </LinkContainer>

              <Nav.Link href="#pricing">Why</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<WelcomePageComponent/>}/>
          <Route path="whoPage" element={<WhoPageComponent/>}/>
          <Route path="whatPage" element={<WhatPageComponent/>}/>
        </Routes>
      </BrowserRouter>
      {/* <WelcomePageComponent /> */}
    </div>
  );
}

export default App;
