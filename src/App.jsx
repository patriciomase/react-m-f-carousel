import React, {Component} from 'react';

// Components.
import Controls from './components/Controls/Controls';
import Track from './components/Track/Track';

class App extends Component {
  constructor(props) {
    super(props);

    this.actions = this.actions.bind(this);
    this.nextAction = this.nextAction.bind(this);
    this.prevAction = this.prevAction.bind(this);

    this.transitionStyles = this.transitionStyles.bind(this);
    this.styles = this.styles.bind(this);

    this.state = {
      // Start on the first slide.
      currentSlide: 0,
      toggleTransition: 1
    };
  }

  nextAction() {
    this.setState({
      currentSlide: this.state.currentSlide + 1
    }, 
    () => {
      // If we moved to a out of the range slide, we jump to the exact same slide on the original array disabling transition.
      setTimeout(() => {
        if (this.state.currentSlide >= this.props.slides.length) {
          this.setState({
            toggleTransition: 0,
            currentSlide: this.state.currentSlide - this.props.slides.length
          },
          () => {
            setTimeout(() => {
              // Enable transition again.
              this.setState({
                toggleTransition: 1
              });
            // This has to match the transition length
            }, 200);
          });      
        }
      // This has to match the transition length
      }, 200);
    });
  }


  prevAction() {
    // Move one slide behind.
    this.setState({
      currentSlide: this.state.currentSlide - 1
    }, 
    () => {
      // If we moved to a negative slide, we jump to the exact same slide on the original array disabling transition.
      setTimeout(() => {
        if (this.state.currentSlide < 0) {
          this.setState({
            toggleTransition: 0,
            currentSlide: this.state.currentSlide + this.props.slides.length
          },
          () => {
            setTimeout(() => {
              // Enable transition again.
              this.setState({
                toggleTransition: 1
              });
            // This has to match the transition length
            }, 200);
          });      
        }
      // This has to match the transition length
      }, 200);
    });

  }
  actions() {
    return {
      nextAction: this.nextAction,
      prevAction: this.prevAction,
    }
  }

  transitionStyles() {
    if (! this.state.toggleTransition) {
      return '';
    }

    // Can be personalized by the user in future.
    return 'margin-left 0.2s ease-in-out';
  }

  styles() {
    return {
      styles: {
        transition: this.transitionStyles()
      }
    };
  }

  render() {
    const propsBuilt = Object.assign({}, this.state, this.props, this.styles());

    return (
      <div className="App">
        <Track {...propsBuilt}/>
        <Controls {...this.actions()}/>
      </div>
    );
  }
}
export default App;
