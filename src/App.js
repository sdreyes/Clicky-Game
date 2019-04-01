import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import images from "./game.json";

class App extends Component {

  state = {
    images,
    clickedImages: [],
    score: 0
  };

  shuffle = () => {
    this.setState({
      images: this.state.images.sort(function() {
        return 0.5 - Math.random();
      })
    })
  };

  resetGame = () => {
    this.shuffle();
    this.setState({
      clickedImages: [],
      score: 0
    })
  }

  handleClick = event => {
    const currentImage = event.target.key;
    const previouslyClicked = this.state.clickedImages.includes(currentImage);

    if (previouslyClicked) {
      alert("You lost");
      this.resetGame();
    }
    else {
      this.setState({
        score: this.state.score + 1,
        clickedImages: this.state.clickedImages.concat(currentImage)
      })
      if (this.state.score === this.state.images.length) {
        alert("You win!");
        this.resetGame();
      }
    }
  }

  render() {
    return (
      <Wrapper>

      </Wrapper>
    );
  }
}

export default App;
