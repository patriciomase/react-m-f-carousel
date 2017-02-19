import React, {Component} from 'react';

// Get the parent dimentions as props.
import Dimensions from 'react-dimensions'

import Slide from '../Slide/Slide';

class TrackInner extends Component {
  constructor(props) {
    super(props);
    this.calculateSlidesWidth = this.calculateSlidesWidth.bind(this);
    this.renderSlides = this.renderSlides.bind(this);
    this.whichIsHighlighted = this.whichIsHighlighted.bind(this);
  }

  calculateSlidesWidth() {
    // If we are in mobile phone viewport show 1 slide.
    if (this.props.containerWidth <= this.props.mobileUntil) {
      return this.props.containerWidth;
    }

    return Math.round(this.props.containerWidth / this.props.show);
  }

  makeStyles() {
    console.log({
      'marginLeft': '-' + (this.calculateSlidesWidth() * this.props.currentSlide + this.calculateSlidesWidth() * this.props.slides.length) + 'px',
      'transition': this.props.styles.transition
    });
    return {
      'marginLeft': '-' + (this.calculateSlidesWidth() * this.props.currentSlide + this.calculateSlidesWidth() * this.props.slides.length) + 'px',
      'transition': this.props.styles.transition
    };
  }

  renderSlides() {
    // Provided slides.
    const realSlides = this.props.slides.map((slide, index) => {
      return Object.assign({}, slide, { index: index });
    });

    // Triplicate the slides array in order to have slides to the right and left.
    let renderedSlides = realSlides.concat(realSlides, realSlides);

    return renderedSlides.map((slide, index) => {
      return (
        <Slide 
          {...slide}
          highlighted={slide.index === this.whichIsHighlighted()}
          key={index}
          width={this.calculateSlidesWidth()}
        />
      );
    });
  }

  whichIsHighlighted() {
    // If number of slides is odd, no highlights
    if (this.props.show % 2 === 0) {
      return null;
    }
    // If even, highlighted is in the middle.
    return (this.props.currentSlide - 1 + (Math.round(this.props.show / 2))) % this.props.slides.length;
  }

  render() {
    return (
      <div className="trackInner" style={this.makeStyles()}>
        {this.renderSlides()}
      </div>
    );
  }
}

export default Dimensions()(TrackInner)
