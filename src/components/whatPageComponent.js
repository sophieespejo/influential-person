import {Container, Row, Col, Card} from 'react-bootstrap';
import './whoPage.css';
import crosswordGif from '../assets/nytimescrossword.gif';
import sudokuImg from '../assets/sudoku.png';
import kenkenImg from '../assets/kenken.png';
import wordleImg from "../assets/wordle.jpg";
import letterBoxedImg from "../assets/letterboxed.jpg"

export default function WhatPageComponent()
{
    const puzzlesArray = [
        {
            src: sudokuImg,
            title : "Sudoku",
            txtDesc : "Place a number exactly once in each row, column, and 3x3 box"
        },
        {
            src: kenkenImg,
            title : "KenKen",
            txtDesc : "Like Sudoku, but must satisfy arithmetic requirements"
        },
        {
            src: wordleImg,
            title : "Wordle",
            txtDesc : "Guess a random 5 letter word with clues about which letters are correct"
        },
        {
            src: letterBoxedImg,
            title : "Letter Boxed",
            txtDesc : "Create words using all the letters around the square"
        }
    ]
    return (
        <Container>
            <Container className="whoContainer whoTxt">
                <Row className="mt-5 pt-3">
                    <h1>What does it mean to be a cruciverbalist?</h1>
                </Row>
            </Container>
            <Row className="mt-4">
                <Col>
                    <Container >
                        <div className="youtube-video-container">
                            <iframe 
                                className = "embed-responsive-item"
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
                </Col>
                    <Container className="d-flex justify-content-center">
                        <Col md={11} className= "whoDescTxt1 mt-3">
                            <p className="headerTxt pt-2 pb-2 pe-2">Will Shortz has been the editor of the New York Times crossword puzzles since 1993, but what does that job position actually entail? <br/>
                            </p>
                            <h5>As the clip above illustrates, there's a lot of thought given when creating a crossword puzzle. Will receives around 100 puzzles a week from various contributors and must look through each submission, correspond with the cruciverbalist, and check and recheck every word and fact of the puzzle. He also goes through each puzzle and assures that the clues for each puzzle is appropriately challenging for the day of the week. By the end of editing process, about half of the clues are the contributor's and the other half is from Will.
                            </h5>
                        </Col>
                    </Container>
            </Row>
            <Row className="mt-4 justify-content-center">
                    <Col lg={5} xs={10} className="whoDescTxt1">
                            <p className="headerTxt pt-2 pb-2">Will Shortz's Favorite Puzzle</p>
                            <h5>Created by mathematician Jeremiah Farrell and edited by Will Shortz, this ingenious crossword puzzle from 1996 is hailed as Will's favorite crossword puzzle. The puzzle was put in the New York Times the day before the 1996 presidential election between Bill Clinton and Bob Dole and had two possible solutions based on how the reader solved the clues. </h5>
                    </Col>
                    <Col lg={5} xs={12} className="d-md-flex">
                        <Container className="img-fluid my-auto" >
                                    <img
                                        src={crosswordGif} 
                                        height= "300px"
                                        width="400px"
                                        className= "" />
                                    <p className="captionTxt">Images via chewpendous/Reddit</p>
                                </Container>
                    </Col>
                    <Row className="mt-4 justify-content-center">
                        <Col xs={8} className="whoDescTxt1">
                                <p className="headerTxt pt-2 pb-2">Not Just Crosswords</p>
                                <h5>Although crossword puzzles are popular for puzzle enthusiasts, there are many other types of puzzles to fill the puzzle itch!</h5>
                            <Container className="pb-4">
                                <Row xl = {4} xs= {2} className="g-4">
                                    {puzzlesArray.map((puzzle, idx) => { 
                                                console.log(puzzle)
                                        return (
                                        <Col>
                                            <Card>
                                                <Card.Img variant="top" src= {puzzle.src} key = {idx}/>
                                                    <Card.Body>
                                                        <Card.Title>{puzzle.title}</Card.Title>
                                                            <Card.Text>
                                                                {puzzle.txtDesc}
                                                            </Card.Text>
                                                    </Card.Body>
                                            </Card>
                                        </Col>
                                    )})}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
            </Row>
        </Container>
    )
}