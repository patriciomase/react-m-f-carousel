import React, {Component} from 'react';

class SlideImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        className="slideImage"
        src={this.props.src} 
      />
    );
  }
}
export default SlideImage;
