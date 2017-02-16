import React, {Component} from 'react';

// Components.
import NextSlide from '../NextSlide/NextSlide'; 
import PreviousSlide from '../PreviousSlide/PreviousSlide'; 

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controls">
        <PreviousSlide prevAction={this.props.prevAction} />
        <div> dots </div>
        <NextSlide nextAction={this.props.nextAction} />
      </div>
    );
  }
}
export default Controls;
