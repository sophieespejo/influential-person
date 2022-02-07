import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../whoPage/whoPage.css';

export default function WhatPageComponent()
{
    return (
        <Container>
            <Container className="whoContainer whoTxt">
                <Row className="mt-5 pt-3">
                    <h1>What does it mean to be a cruciverbalist?</h1>
                </Row>
            </Container>
            <Row className="mt-5">
                    <Container>
                        <div>
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/aAqQnXHd7qk" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen >
                            </iframe>
                        </div>
                    </Container>
                    <Container className= "whoDescTxt1 mt-3">
                        <p className="headerTxt pt-2 pb-2">Will Shortz has been the editor of the New York Times crossword puzzles since 1993, but what does that job position actually entail? <br/>
                        </p>
                        <h4>As the clip above illustrates, there's a lot of thought given when creating a crossword puzzle. Will receives around 100 puzzles a week from various contributors and must look through each submission, correspond with the cruciverbalist, and check and recheck every word and fact of the puzzle. He also goes through each puzzle and assures that the clues for each puzzle is appropriately challenging for the day of the week. Will uses a plethora of books at his disposal to fact..
                        </h4>
                    </Container>
            </Row>
        </Container>
    )
}