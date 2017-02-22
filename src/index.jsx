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

  // Breakpoints config.
  mobileUntil: 480,

  // Image List.
  slides: [
    {
      src: '//www.9thgencivic.com/forum/attachments/other-cars/167153d1394922229-cool-cars-you-encounter-imageuploadedbyautoguide1394922392.684932.jpg',
      title: 'McLaren',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
    },
    {
      src: '//lh3.googleusercontent.com/--GAcfZRZ1jk/WJXCo5zcQ5I/AAAAAAAAoBo/GWt5KRXAFHY7Pqxq8rP36Wvcak5UllhbwCJoC/w530-h295-p/10446222_878702998840874_4787867059236319077_o.jpg',
      title: 'Masseratti Sarasa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      src: '//4.bp.blogspot.com/-9xOQsi1wtU0/VHtyVcUDdEI/AAAAAAAAAMI/yz-zHBulojY/s1600/Porsche-918-Weissach-video.jpg',
      title: 'This is a title',
      description: 'A nice description this car can run really fast!!!'
    },
    {
      src: '//www.thetorquereport.com/assets_c/2012/05/2013_Ford_Focus_ST_00008-thumb-530x295-20363.jpg',
      title: 'Ford Focus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
    },
    {
      src: '//www.virtualparking.net/imgdir/869-530.jpg',
      title: 'This is a title',
      description: 'A nice description this car can run really fast!!!'
    },
    {
      src: '//www.ausmotive.com/pics/2012/Audi-R18-etron-video.jpg',
      title: 'Audi R18',
      description: 'Audi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
    }
  ]
};

ReactDOM.render(
  <App {...mfConfig} />,
  document.getElementById('react-root'));
