import React, { Component, PropTypes } from 'react';


export default class App extends Component {
  static propTypes = {
    componentStyle: PropTypes.object.isRequired,
    config: PropTypes.object
  }

  render() {
    const { componentStyle, config } = this.props;
    return (<div style={componentStyle}>
      Hello World. <br />
      Properties: <strong>{JSON.stringify(componentStyle)}</strong><br />
      Configuration: { config ? JSON.stringify(config) : <div>No configuration object supplied</div>}
    </div>);
  }
}
