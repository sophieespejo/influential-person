import './App.css';
import WelcomePageComponent from './components/welcomePageComponent';
import WhoPageComponent from './components/whoPageComponent';
import WhatPageComponent from './components/whatPageComponent';
import WhyPageComponent from './components/whyPageComponent';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar bg="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">🅆🄸🄻🄻 🅂🄷🄾🅁🅃🅉</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="whoPage">Who?</Nav.Link>
              <Nav.Link href="whatPage">What?</Nav.Link>
              <Nav.Link href="whyPage">Why?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          <Routes>
            <Route path="/" element={<WelcomePageComponent/>}/>
            <Route path="whoPage" element={<WhoPageComponent/>}/>
            <Route path="whatPage" element={<WhatPageComponent/>}/>
            <Route path="whyPage" element={<WhyPageComponent/>}/>
        </Routes>
        {/* <Navbar.Toggle />
        <Navbar.Collapse bg="dark" variant="dark">
          <Container>
            <Nav.Link href="/">
                <Navbar.Brand>🅆🄸🄻🄻 🅂🄷🄾🅁🅃🅉</Navbar.Brand>
            </Nav.Link>
            <Nav className="navbar navbar-expand-xs">
              <Nav.Item>
                <Nav.Link href="whoPage">Who?</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="whatPage">What?</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="whyPage">Why?</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar.Collapse>
        <Routes>
          <Route path="/" element={<WelcomePageComponent/>}/>
          <Route path="whoPage" element={<WhoPageComponent/>}/>
          <Route path="whatPage" element={<WhatPageComponent/>}/>
          <Route path="whyPage" element={<WhyPageComponent/>}/>
        </Routes> */}
      </BrowserRouter>
      {/* <WelcomePageComponent /> */}
    </div>
  );
}

export default App;
