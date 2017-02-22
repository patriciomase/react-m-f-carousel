import React, {Component} from 'react';

// Get the parent dimentions as props.
import Dimensions from 'react-dimensions'

// Components.
import Controls from './components/Controls/Controls';
import Main from './components/Main/Main';
import Track from './components/Track/Track';

class App extends Component {
  constructor(props) {
    super(props);

    this.actions = this.actions.bind(this);
    this.changeTexts = this.changeTexts.bind(this);
    this.currentViewPort = this.currentViewPort.bind(this);
    this.nextAction = this.nextAction.bind(this);
    this.prevAction = this.prevAction.bind(this);
    this.responsiveStuff = this.responsiveStuff.bind(this);
    this.transitionStyles = this.transitionStyles.bind(this);
    this.styles = this.styles.bind(this);

    this.state = {
      // Start on the first slide.
      currentSlide: 0,
      
      // Used to disable the transition temporarly to get the infinite carousel effect.
      toggleTransition: 1,

      // Used to keep track of the texts status and fire the animation.
      showingTexts: 1
    };
  }

  actions() {
    return {
      nextAction: this.nextAction,
      prevAction: this.prevAction,
    }
  }

  /**
   * Disable and re-enable showingTexts.
   * Components will re-render causing the animation.
   */
  changeTexts() {
    this.setState({
      showingTexts: 0
    },
    () => {
      setTimeout(() => {
        this.setState({
          showingTexts: 1
        });
      }, 800);
    });

  }

  currentViewPort() {
    if (this.props.containerWidth <= this.props.mobileUntil) {
      return 'mobile';
    }

    return 'desktop';
  }

  nextAction() {

    this.changeTexts();
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

    this.changeTexts();
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

  responsiveStuff() {
    return {
      responsive: {
        containerWidth: this.props.containerWidth,
        viewport: this.currentViewPort()
      }
    };
  }
  
  styles() {
    return {
      styles: {
        transition: this.transitionStyles()
      }
    };
  }

  transitionStyles() {
    if (! this.state.toggleTransition) {
      return '';
    }

    // Can be personalized by the user in future.
    return 'margin-left 0.2s ease-in-out';
  }

  render() {
    const propsBuilt = Object.assign({}, 
      this.state, 
      this.props, 
      this.styles(),
      this.responsiveStuff()
    );

    return (
      <div className="App">
        <Main {...propsBuilt}/>
        <Track {...propsBuilt}/>
        <Controls {...this.actions()}/>
      </div>
    );
  }
}

export default Dimensions()(App)
