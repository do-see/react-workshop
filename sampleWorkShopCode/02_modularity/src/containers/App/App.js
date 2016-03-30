import React, { Component, PropTypes } from 'react';


export default class App extends Component {
  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props;
    return (<div className="well">
      <iframe style={{width: '100%', height: 500, border: 0}} src="http://localhost:3000"/>
    </div>);
  }
}
