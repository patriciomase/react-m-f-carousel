import React, {Component} from 'react';

// Components.
import WallSlide from '../WallSlide/WallSlide';

class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.renderWallSlides = this.renderWallSlides.bind(this);
    this.whichIsActive = this.whichIsActive.bind(this);
  }

  renderWallSlides() {

    return this.props.slides.map((slide, index) => {
      return (
        <WallSlide 
          {...slide}
          active={index === this.whichIsActive()}
          key={index}
        />
      );
    });
  }

  whichIsActive() {
    // If number of slides is odd, no highlights
    if (this.props.show % 2 === 0) {
      return this.props.currentSlide;
    }
    console.log((this.props.currentSlide - 1 + (Math.round(this.props.show / 2))) % this.props.slides.length);
    // If even, highlighted is in the middle.
    return (this.props.currentSlide - 1 + (Math.round(this.props.show / 2))) % this.props.slides.length;
  }

  render() {
    return (
      <div className="wallpaper">
        {this.renderWallSlides()}
      </div>
    );
  }
}

export default Wallpaper;