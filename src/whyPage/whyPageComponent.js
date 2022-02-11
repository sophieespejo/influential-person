import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import '../whoPage/whoPage.css';
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
            <Row>
            
                <Container className= "whoDescTxt1 mt-3">

                    <p className="headerTxt whyTxt pt-2 pb-2 pe-2">Why Will Shortz?</p>
                    <h5>Will is a prestigious name in the puzzle community and it makes sense to reference him as an influential person. Growing up, I've always loved challenging myself with puzzles. I adored getting the logic handouts teachers gave out at the end of an activity to complete. The sense of accomplishment after completing a challenge was envigorating. While, admittedly, I am no where close to completing an end of the week NYT crossword puzzle, I still enjoy the chasing that same feeling with a Monday or Tuesday puzzle. Later in life, I made the connection with puzzles and programming, because what else is coding if not solving a series of puzzles? Just like with the NYT crosswords, while some puzzles may be out of my skill level, I like learning the different possibilities about how it can be approached and solved. I hope to continue to...
                    </h5>
                </Container>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Container className="whoDescTxt1 p-4">
                        <blockquote className="blockQuoteTxt ">
                            {quoteLeft}
                            “The key to solving crosswords is mental flexibility. If one answer doesn’t seem to be working out, try something else.” 
                            {quoteRight}
                        </blockquote>
                        <h5 className="quote">-Will Shortz</h5>
                    </Container>
                </Col>
                <Col>
                    <Container className="whoDescTxt1">
                        <p className="headerTxt pt-2 pb-2 pe-2">NYT's Tips to Solving a NYT crossword </p>
                        <span>(and how I've applied it to learning how to program)</span>
                        <p>1. Start with Monday puzzles since they're easier: Printing "Hello World" is the Monday puzzle of learning a new programming language. Start easy then progress to the harder stuff.</p>
                        <p>2. Practice, practice, and practice some more: Learning isn't happening fully until the new knowledge is being applied and practiced. </p>
                        <p>3. It's okay to look up answers: Some of the crossword clues are hard. Some bugs are hard to fix on your own. Don't fixate on what you don't know and use your support system to get through it, be it via internet search or a peer. </p>
                        <p>4. Take a break if you're stuck:  </p>
                    </Container>
                </Col>
            </Row>
      </Container>
  );
}
