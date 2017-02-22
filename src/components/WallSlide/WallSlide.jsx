import React, {Component} from 'react';

class WallSlide extends Component {
  constructor(props) {
    super(props);
    this.makeStyle = this.makeStyle.bind(this);
  }

  makeStyle() {
    if (this.props.active) {
      return {
        backgroundImage: `url('${this.props.src}')`,
        opacity: '1'
      };
    }

    return {
      'backgroundImage': `url('${this.props.src}')`,
      opacity: '0'
    }
  }

  render() {
    return (
      <div
        className="wallSlide"
        style={this.makeStyle()}
      >
      </div>
    );
  }
}
export default WallSlide;
