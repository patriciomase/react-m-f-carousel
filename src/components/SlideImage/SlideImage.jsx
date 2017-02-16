import React, {Component} from 'react';

class SlideImage extends Component {
  constructor(props) {
    super(props);

    this.makeStyles = this.makeStyles.bind(this);
  }

  makeStyles() {
    // If the image is selected highlight it.
    if (this.props.highlighted) {
      return {
        border: '2px solid yellow',
        transform: 'scale(1.05)'
      };
    }

    return {};
  }

  render() {
    return (
      <img
        className="slideImage"
        src={this.props.src}
        style={this.makeStyles()}
      />
    );
  }
}
export default SlideImage;
