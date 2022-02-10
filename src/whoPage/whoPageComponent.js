import {Container, Row, Col, Carousel} from 'react-bootstrap';
import './whoPage.css';
import shortzImg from '../assets/shortz.jpg';
import shortzMosaic from '../assets/Shortz-1.jpg';
import shortzWill from '../assets/Shortz_Will.jpg';
import shortzNewspaper from '../assets/01insider-shortz-image-main-superJumbo.jpg'

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
            <Container>
                <Row className="firstRow mt-5">
                    <Col className="whoDescTxt">
                        <h5 className="pt-4">Born in 1952, Will knew that puzzles would be a huge part of his life.He first started making puzzles when he was 9 years old and had even written a paper in middle school about hopefully turning his interest into a career. He titled his work "Puzzles as a Profession." Will soon sold his first puzzle professionally when he was 14. Within two years, Will became a regular contributor to Dell puzzle magazines. </h5>
                    </Col>
                    <Col className="d-flex">
                        <div className="shortzImg mx-auto img-fluid ">
                            <img className="mt-md-0 mt-sm-4"
                                src={shortzImg}
                                />
                        </div>
                    </Col>
                    <Col className="whoDescTxt mt-lg-0 mt-sm-4">
                        <h5 className=" pt-4">Will went on to Indiana University to design his own undergraduate major program and earned a degree in Enigmatology, the study of puzzles. He then earned his law degree from the University of Virginia, but skipped the bar exam to start his career in creating puzzles. He worked as an editor for Games magazine for 15 years until he started his current stint as the crossword puzzle editor for the New York Times in 1993. </h5>
                    </Col>
                </Row>
                <Row className="mt-4 justify-content-center">
                    <Col xs={6}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={shortzMosaic}
                            alt="Crossword mosaic of Shortz by Ken Knowlton 2003"
                            />
                            <Carousel.Caption>
                            <h3>Crossword Mosaic</h3>
                            <p>Crossword mosaic of Shortz by Ken Knowlton 2003</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-10"
                            src={shortzWill}
                            alt="Photo of Will Shortz"
                            />

                            <Carousel.Caption>
                            <h3>Will Shortz</h3>
                            <p>Will Shortz photographed at a crossword competition</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={shortzNewspaper}
                            alt="Will Shortz with a crossword puzzle from 1929"
                            />

                            <Carousel.Caption>
                            <h3>Will Shortz</h3>
                            <p>Will Shortz at home with a crossword puzzle from 1929</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col className="whoDescTxt mt-lg-4 mt-sm-4">
                        <h5 className=" pt-4">In 2009, Will added KenKen puzzles to the Times, a logic puzzle similar to Sudoku, but with the added element of satisfying certain arithmetic requirements.  Due to the pandemic, Will then expanded the variety of weekly puzzles to include Brain Ticklers, Crytograms, and Wit Twisters. Will noted, “People feel stressed — we all feel stressed — and puzzles are a great way to relieve that. You feel in control of life when you’ve finished a good puzzle.” By April 2021, Will completed a major milestone had edited his 10,000th crossword puzzle for The New York Times.  </h5>
                    </Col>
                </Row>

            </Container>

        </Container>
    )
}