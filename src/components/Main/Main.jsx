import React, {Component} from 'react';

// Components.
import Texts from '../Texts/Texts';
import Wallpaper from '../Wallpaper/Wallpaper';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`main ${this.props.responsive.viewport}`}
      >
        <Texts 
          {...this.props.slides[this.props.currentSlide]}
          showingTexts={this.props.showingTexts}
          viewport={this.props.responsive.viewport}
        />
        <Wallpaper 
          {...this.props}
          whichIsActive={this.props.currentSlide}
          viewport={this.props.responsive.viewport}
        />
      </div>
    );
  }
}
export default Main;