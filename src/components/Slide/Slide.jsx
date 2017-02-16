import React, {Component} from 'react';

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
        <img src={this.props.src} />
      </div>
    );
  }
}
export default Slide;
