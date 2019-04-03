import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Image from "./components/Image";
import Container from "./components/Container";
import Row from "./components/Row";
import Title from "./components/Title";
import Nav from "./components/Nav";
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
    })
  }

  checkWin = () => {
    console.log(this.state.score);
    if (this.state.score === this.state.images.length) {
      alert("You win!");
      this.resetGame("You won");
    }
    else {
      this.shuffle();
    };
  };

  handleClick = id => {
    const previouslyClicked = (this.state.clickedImages.indexOf(id) > -1);
    if (previouslyClicked) {
      alert("You lost");
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score
        }, this.resetGame("You lost"));
      }
      else {
        this.resetGame("You lost");
      };
    }
    else {
      this.setState({
        score: this.state.score + 1,
        clickedImages: this.state.clickedImages.concat(id),
        status: ""
      }, () => this.checkWin());
    };
  };

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} topScore={this.state.topScore}/>
        <Title />
        <Container>
          <Row>
            {this.state.images.map(image => (
              <Image 
                imageClick={this.handleClick} 
                id={image.id}
                key={image.id}
                image={image.img}
              />
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
