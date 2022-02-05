import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import './whoPage.css';
import shortzImg from '../assets/shortz.jpg'

export default function WhoPageComponent()
{
    return (
        <Container>
            <Container className="whoContainer whoTxt">
                <Row className="mt-5 pt-3">
                    <h1>Who is Will Shortz?</h1>
                </Row>
                <Row className="mt-3">
                    <h4>14 letter word meaning a person skillful in creating or solving crossword puzzles</h4>
                </Row>
                <Row className="mt-3 pb-3">
                    <h3>🄲🅁🅄🄲🄸🅅🄴🅁🄱🄰🄻🄸🅂🅃</h3>
                </Row>
            </Container>
            <Row className="mt-5">
                <Col className="whoDescTxt">
                    <h4 className="pt-4">Born in 1952, Will Shortz first starting making puzzles when he was 9 years old. He becamed enthralled with puzzles and holds the world's only college degree in Enigmatology, the study of puzzles. Will is currently the crossword editor for the New York Times and the Puzzlemaster for NPR. </h4>
                </Col>
                <Col>
                    <img className=""
                        src={shortzImg}
                        />
                </Col>
            </Row>

        </Container>
    )
}