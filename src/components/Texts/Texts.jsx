import React, {Component} from 'react';

class Texts extends Component {
  constructor(props) {
    super(props);

    this.textsStatus = this.textsStatus.bind(this);
  }

  textsStatus() {
    if (this.props.showingTexts) {
      return 'active';
    }
  }

  render() {
    return (
      <div
        className={`texts ${this.props.viewport}`}
      >
        <div className={`texts-title ${this.textsStatus()}`}>
          {this.props.title}
        </div>
        <div className={`texts-description ${this.textsStatus()}`}>
          {this.props.description}
        </div>
      </div>
    );
  }
}
export default Texts;
