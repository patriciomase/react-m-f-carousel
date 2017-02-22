import React, {Component} from 'react';

import Slide from '../Slide/Slide';

class TrackInner extends Component {
  constructor(props) {
    super(props);

    this.calculateOffset = this.calculateOffset.bind(this);
    this.calculateSlidesWidth = this.calculateSlidesWidth.bind(this);
    this.renderSlides = this.renderSlides.bind(this);
    this.whichIsHighlighted = this.whichIsHighlighted.bind(this);
  }

  calculateOffset() {

    if (this.props.responsive.viewport === 'mobile') {
      return 0;
    }

    if (this.props.show % 2 === 0) {
      return 0;
    }

    return Math.floor(this.props.show / 2);
  }

  calculateSlidesWidth() {
    // If we are in mobile phone viewport show 1 slide.
    if (this.props.responsive.viewport === 'mobile') {
      return this.props.responsive.containerWidth;
    }

    return Math.round(this.props.responsive.containerWidth / this.props.show);
  }

  makeStyles() {
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

    // Take care of the offset if we are centering the carousel
    const offset = this.calculateOffset();

    const removed = renderedSlides.splice(- offset);
    renderedSlides = removed.concat(renderedSlides);

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
    // If we are in mobile view there is no highlight.
    if (this.props.responsive.viewport === 'mobile') {
      return null;
    }
    
    return this.props.currentSlide;
    }

  render() {
    return (
      <div className="trackInner" style={this.makeStyles()}>
        {this.renderSlides()}
      </div>
    );
  }
}

export default TrackInner;
