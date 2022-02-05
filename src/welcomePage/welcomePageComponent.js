import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import './welcomePage.css';
import image from '../assets/6624392.png';

export default function WelcomePage()
{
    return (
        <Container className="welcomeContainer">
            <Row className="mt-5 pt-5 text-center">
                <h1>Life of a cruciverbalist: Will Shortz</h1>
            </Row>
        </Container>
    )
}