import React, {Component} from 'react';

import TrackInner from './TrackInner';

class Track extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="track">
        <TrackInner
          {...this.props}
        />
      </div>
    );
  }
}
export default Track;
