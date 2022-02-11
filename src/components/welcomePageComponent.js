import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import image from '../assets/welcomegif.gif';

export default function WelcomePage()
{
    return (
        <Container>
            <Row className="mt-5 text-center">
                <h1>The life of a cruciverbalist: Will Shortz</h1>
            </Row>
            <Row>
                <Col>
                    <img 
                        src={image}
                        className="img-fluid"/>
                </Col>
            </Row>
        </Container>
    )
}