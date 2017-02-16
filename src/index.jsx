// Application entrypoint.

// Load up the application styles
require('./_app.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Configuration object.
const mfConfig = {
  // How many slides do you want to show?
  show: 3,

  // Breakpoints config
  mobileUntil: 480,

  // Image List.
  slides: [
    {
      src: '//fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/01/07/103287518-McLaren-650S-Spider.530x298.jpg?v=1452181967'
    },
    {
      src: '//www.wonderslist.com/wp-content/uploads/2015/04/McLaren-650S.jpg'
    },
    {
      src: '//cdn.nowitcounts.com/wp-content/uploads/2016/01/Supercar-Capital.jpg'
    },
    {
      src: '//www.freefbpictures.com/wp-content/gallery/supercars-6-2/supercars-in-london.jpg'
    },
    {
      src: '//images.car.bauercdn.com/upload/9778/images/porschesize.jpg'
    }
  ]
};

ReactDOM.render(
  <App {...mfConfig} />,
  document.getElementById('react-root'));
