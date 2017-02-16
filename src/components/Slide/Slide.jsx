import React, {Component} from 'react';

// Components.
import SlideImage from '../SlideImage/SlideImage';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.makeStyle = this.makeStyle.bind(this);
  }

  makeStyle() {
    return {
      width: this.props.width + 'px'
    }
  }

  render() {
    return (
      <div
        className="slide"
        style={this.makeStyle()}
      >
        <SlideImage src={this.props.src} />
      </div>
    );
  }
}
export default Slide;
