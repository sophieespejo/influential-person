import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../whoPage/whoPage.css';
import crosswordGif from '../assets/nytimescrossword.gif';

export default function WhatPageComponent()
{
    return (
        <Container>
            <Container className="whoContainer whoTxt">
                <Row className="mt-5 pt-3">
                    <h1>What does it mean to be a cruciverbalist?</h1>
                </Row>
            </Container>
            <Row className="mt-4">
                    <Container>
                        <div>
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/aAqQnXHd7qk" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen >
                            </iframe>
                        </div>
                    </Container>
                    <Container className= "whoDescTxt1 mt-3">
                        <p className="headerTxt pt-2 pb-2 pe-2">Will Shortz has been the editor of the New York Times crossword puzzles since 1993, but what does that job position actually entail? <br/>
                        </p>
                        <h4>As the clip above illustrates, there's a lot of thought given when creating a crossword puzzle. Will receives around 100 puzzles a week from various contributors and must look through each submission, correspond with the cruciverbalist, and check and recheck every word and fact of the puzzle. He also goes through each puzzle and assures that the clues for each puzzle is appropriately challenging for the day of the week. By the end of editing process, about half of the clues are the contributor's and the other half is from Will.
                        </h4>
                    </Container>
            </Row>
            <Row className="mt-4">
                    <Col>
                        <Container className="whoDescTxt1">
                            <p className="headerTxt pt-2 pb-2">Will Shortz's Favorite Puzzle</p>
                            <h4>Created by mathematician Jeremiah Farrell and edited by Will Shortz, this ingenious crossword puzzle from 1996 is hailed as Will's favorite crossword puzzle. The puzzle was put in the New York Times the day before the 1996 presidential election between Bill Clinton and Bob Dole and had two possible solutions based on how the reader solved the clues. </h4>
                        </Container>
                    </Col>
                    <Col>
                        <div>
                            <img
                                src={crosswordGif} 
                                height= "300px"
                                className= "" />
                            <p className="captionTxt">Images via chewpendous/Reddit</p>
                        </div>
                    </Col>
            </Row>
        </Container>
    )
}