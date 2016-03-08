import React from 'react';
import { Link } from 'react-router'
import ItemListDisplay from './ItemListDisplay';
import ItemSearch from './ItemSearch';

export default class ItemDisplay extends React.Component {
  render() {
    return (
      <div>
        <ItemSearch />
        <ul>
          <li><Link to="/tech/react">React</Link></li>
          <li><Link to='/tech/react-native'>React Native</Link></li>
          <li><Link to="/tech/javascript" >Javascript</Link></li>
        </ul>
      </div>
    );
  }
};
