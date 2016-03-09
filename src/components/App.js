import React from 'react';


import ItemDisplay from './ItemDisplay';
import ItemListDisplay from './ItemListDisplay';

export default class App extends React.Component {
  render() {
    return (
      <div className="row">
          <div className="col s12 m8 offset-m2 center">
            <h1>Where24Help</h1>
          </div>
          <div className=" col s12 m6 offset-m3 l10 offset-l2">
            {this.props.children}
          </div>
      </div>
    );
  }
};
