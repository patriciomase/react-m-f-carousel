// Application entrypoint.

// Load up the application styles
require('./_app.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Configuration object.
const mfConfig = {
  // How many slides do you want to show?
  show: getParameterByName('show') || 3,

  // Breakpoints config
  mobileUntil: 480,

  // Image List.
  slides: [
    {
      src: '//www.9thgencivic.com/forum/attachments/other-cars/167153d1394922229-cool-cars-you-encounter-imageuploadedbyautoguide1394922392.684932.jpg'
    },
    {
      src: '//lh3.googleusercontent.com/-uitlPI6-dE8/Vi8a7xSWu2I/AAAAAAAAAo0/XH6WvduzxDY/w530-h295-p/lamborghini-aventado-4_800x0w.jpg'
    },
    {
      src: '//4.bp.blogspot.com/-9xOQsi1wtU0/VHtyVcUDdEI/AAAAAAAAAMI/yz-zHBulojY/s1600/Porsche-918-Weissach-video.jpg'
    },
    {
      src: '//www.thetorquereport.com/assets_c/2012/05/2013_Ford_Focus_ST_00008-thumb-530x295-20363.jpg'
    },
    {
      src: '//www.virtualparking.net/imgdir/869-530.jpg'
    }
  ]
};



ReactDOM.render(
  <App {...mfConfig} />,
  document.getElementById('react-root'));
