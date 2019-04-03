import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Image from "./components/Image";
import Container from "./components/Container";
import Row from "./components/Row";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import images from "./game.json";

class App extends Component {

  state = {
    images,
    clickedImages: [],
    score: 0,
    topScore: 0,
    status: ""
  };

  shuffle = () => {
    this.setState({
      images: this.state.images.sort(() => 0.5 - Math.random())
    });
  };

  resetGame = (status) => {
    this.shuffle();
    this.setState({
      clickedImages: [],
      score: 0,
      status: status
    });
  };

  checkWin = () => {
    if (this.state.score === this.state.images.length) {
      this.playAudio("audio/win.mp3");
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score
        }, () => this.resetGame("win"));
      };
    }
    else {
      this.shuffle();
    };
  };

  playAudio = sound => {
    let audio = new Audio(sound);
    audio.play();
  }

  handleClick = id => {
    const previouslyClicked = (this.state.clickedImages.indexOf(id) > -1);
    if (previouslyClicked) {
      this.playAudio("audio/lose.mp3");
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score
        }, () => this.resetGame("lose"));
      }
      else {
        this.resetGame("lose");
      };
    }
    else {
      this.setState({
        score: this.state.score + 1,
        clickedImages: this.state.clickedImages.concat(id),
        status: "correct"
      }, () => this.checkWin());
    };
  };

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} topScore={this.state.topScore}/>
        <Title />
        <Alert status={this.state.status}/>
        <Container>
          <Row status={this.state.status}>
            {this.state.images.map(image => (
              <Image 
                imageClick={this.handleClick} 
                status={this.state.status}
                id={image.id}
                key={image.id}
                image={image.img}
              />
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  };
};

export default App;
