import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import './whoPage.css';
import puzzleGif from '../assets/puzzleGif.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


export default function WhyPageComponent() {
    const quoteLeft = <FontAwesomeIcon icon={faQuoteLeft} />
    const quoteRight = <FontAwesomeIcon icon={faQuoteRight} />
    
  return (
      <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={8} className="d-flex">
                    <img 
                        className="img-fluid"
                        src = {puzzleGif}
                        height= "500px"/>
                </Col>
            </Row>
            <Row className="justify-content-center">
            
                <Container className= "whoDescTxt1 mt-3">

                    <p className="headerTxt whyTxt pt-2 pb-2 pe-2">Why Will Shortz?</p>
                    <h5>Will is a prestigious name in the puzzle community and it makes sense to reference him as an influential person. Growing up, I've always loved challenging myself with puzzles. The sense of accomplishment after completing a challenge was envigorating. While, admittedly, I am no where close to completing an end of the week NYT crossword puzzle, I still enjoy the chasing that same feeling with a Monday or Tuesday puzzle. Later in life, I made the connection with puzzles and programming, because what else is coding if not solving a series of puzzles? Just like with the NYT crosswords, while some puzzles may be out of my skill level, I like learning the different possibilities about how it can be approached and solved. Will's quote below highlights the need to be versatile in your thinking which I believe can be applied to both crosswords and programming.
                    </h5>
                </Container>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col xs={8}>
                    <Container className="headerTxt1 p-4">
                        <blockquote className="blockQuoteTxt ">
                            {quoteLeft}
                            The key to solving crosswords is mental flexibility. If one answer doesn’t seem to be working out, try something else. 
                            {quoteRight}
                        </blockquote>
                        <h5 className="quote">-Will Shortz</h5>
                    </Container>
                </Col>

            </Row>
            <Row className="mt-4 justify-content-center">
                <Col>
                    <Container className="whoDescTxt1">
                        <p className="headerTxt pt-2 pb-2 pe-2">NYT's Tips Solving a NYT crossword <br></br>
                        <span>(and how I've applied it to learning how to program)</span></p>

                        <p>1. Start with Monday puzzles since they're easier: Printing "Hello World" is the Monday puzzle of learning a new programming language. I've learned that taking baby steps when learning something new is beneficial.</p>
                        <p>2. Practice, practice, and practice some more: With each crossword I attempt, I know that my wordplay skills are getting better. The same goes when programming: Learning isn't happening fully until the new knowledge is being applied and practiced. </p>
                        <p>3. It's okay to look up answers: Some of the crossword clues are really clever and tricky. Same goes with some bugs faced while programming. No shame in googling a crossword clue or your issue on Stack Overflow. </p>
                        <p>4. Take a break if you're stuck: Sometimes your "aha!" moment happens when you least expect it. Sometimes you need a mental break in order for it to happen. I've learned it's best to take breaks when tackling a difficult problem. </p>
                    </Container>
                </Col>
            </Row>
      </Container>
  );
}
