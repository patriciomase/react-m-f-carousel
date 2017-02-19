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
        className="main"
      >
        <Texts />
        <Wallpaper {...this.props}/>
      </div>
    );
  }
}
export default Main;