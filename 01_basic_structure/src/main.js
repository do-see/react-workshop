import React from 'react';
import ReactDOM from 'react-dom';

const componentHasBorderStyle = {
  border: '3px solid #ff0000'
};

setTimeout(() =>
  ReactDOM.render(
    <h1 style={componentHasBorderStyle}>Hello, world2!</h1>,
    document.getElementById('example')
  )
, 2000);
