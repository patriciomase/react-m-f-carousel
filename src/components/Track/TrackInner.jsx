import React, {Component} from 'react';

// Get the parent dimentions as props.
import Dimensions from 'react-dimensions'

import Slide from '../Slide/Slide';

class TrackInner extends Component {
  constructor(props) {
    super(props);
    this.calculateSlidesWidth = this.calculateSlidesWidth.bind(this);
    this.renderSlides = this.renderSlides.bind(this);
  }

  calculateSlidesWidth() {
    return this.props.containerWidth;
  }

  makeStyles() {
    console.log({
      'marginLeft': '-' + (this.props.containerWidth * this.props.currentSlide + this.props.containerWidth * this.props.slides.length) + 'px',
      'transition': this.props.styles.transition
    });
    return {
      'marginLeft': '-' + (this.props.containerWidth * this.props.currentSlide + this.props.containerWidth * this.props.slides.length) + 'px',
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
          key={index}
          width={this.calculateSlidesWidth()}
        />
      );
    });
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
