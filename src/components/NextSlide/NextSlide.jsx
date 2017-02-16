import React, {Component} from 'react';

class NextSlide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="nextSlide"
        onClick={this.props.nextAction}
      >
        {'>>'}
      </div>
    );
  }
}
export default NextSlide;
