import React, {Component} from 'react';

// Components.
import WallSlide from '../WallSlide/WallSlide';

class Wallpaper extends Component {
  constructor(props) {
    super(props);

    this.renderWallSlides = this.renderWallSlides.bind(this);
  }

  renderWallSlides() {

    return this.props.slides.map((slide, index) => {
      return (
        <WallSlide 
          {...slide}
          active={this.props.currentSlide === index}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <div className={`wallpaper ${this.props.viewport}`}>
        {this.renderWallSlides()}
      </div>
    );
  }
}

export default Wallpaper;