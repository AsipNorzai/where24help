import React from 'react';


import ItemDisplay from './ItemDisplay';
import ItemListDisplay from './ItemListDisplay';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div className="row">
              <span className="center">Where24Help</span>
              <div className=" col s12 m6 offset-m3 l10 offset-l2">
                {this.props.children}
              </div>
          </div>
        </main>
      </div>
    );
  }
};
