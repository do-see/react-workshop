import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';

const componentHasBorderStyle = {
  border: '3px solid #ff0000'
};

setTimeout(() =>
  ReactDOM.render(<App componentStyle={componentHasBorderStyle} />,
    document.getElementById('example')
  )
, 2000);


const render = (intoElementID, config) => {
  ReactDOM.render(<App componentStyle={componentHasBorderStyle} config={config} />,
    document.getElementById(intoElementID)
  )
}

window.define(['jquery', 'bootstrap'], (jQuery) => {
  $.ajax({
    url: 'https://httpbin.org/get'
  }).done(function(data) {
    $('body').append( '<div>Loaded data through jQuery: <br /> <pre>' + JSON.stringify(data, null, 2) + '</pre></div>' );
  });
  return {
    render: render
  };
});
