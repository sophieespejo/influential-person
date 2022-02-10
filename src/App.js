import './App.css';
import WelcomePageComponent from './welcomePage/welcomePageComponent';
import WhoPageComponent from './whoPage/whoPageComponent';
import WhatPageComponent from './whatPage/whatPageComponent';
import WhyPageComponent from './whyPage/whyPageComponent';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav.Link href="/">
                <Navbar.Brand>🅆🄸🄻🄻 🅂🄷🄾🅁🅃🅉</Navbar.Brand>
            </Nav.Link>
            <Nav className="">
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
        </Navbar>
        <Routes>
          <Route path="/" element={<WelcomePageComponent/>}/>
          <Route path="whoPage" element={<WhoPageComponent/>}/>
          <Route path="whatPage" element={<WhatPageComponent/>}/>
          <Route path="whyPage" element={<WhyPageComponent/>}/>
        </Routes>
      </BrowserRouter>
      {/* <WelcomePageComponent /> */}
    </div>
  );
}

export default App;
