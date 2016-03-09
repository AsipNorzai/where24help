import React from 'react';


import ItemDisplay from './ItemDisplay';
import ItemListDisplay from './ItemListDisplay';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>From Main</h1>
        {this.props.children}
      </div>
    );
  }
};
