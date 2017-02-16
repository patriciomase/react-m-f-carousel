import React, {Component} from 'react';

class PreviousSlide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="previousSlide"
        onClick={this.props.prevAction}
      >
        {'<<'}
      </div>
    );
  }
}
export default PreviousSlide;
