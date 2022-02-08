import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import '../whoPage/whoPage.css';
import puzzleGif from '../assets/puzzleGif.gif';

export default function WhyPageComponent() {
  return (
      <Container className="mt-5">
            <Row>
                <img 
                    src = {puzzleGif}
                    height= "500px"/>
            </Row>
            <Row>
                    <Container className= "whoDescTxt1 mt-3">
                        <p className="headerTxt whyTxt pt-2 pb-2 pe-2">Why Will Shortz?
                        </p>
                        <h5>Will is a prestigious name in the puzzle community and it makes sense to reference him as an influential person. Growing up, I've always loved challenging myself with puzzles. I adored getting the logic handouts teachers gave out at the end of an activity to complete. The sense of accomplishment after completing a challenge was envigorating. While, admittedly, I am no where close to completing an end of the week NYT crossword puzzle, I still enjoy the chasing that same feeling with a Monday or Tuesday puzzle. Later in life, I made the connection with puzzles and programming, because what else is coding if not solving a series of puzzles? Just like with the NYT crosswords, while some puzzles may be out of my skill level, I like learning the different possibilities about how it can be approached and solved. I hope to continue to...
                        </h5>
                    </Container>
            </Row>

      </Container>
  );
}
