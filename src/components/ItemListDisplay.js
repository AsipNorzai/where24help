import React from 'react';
import { Link } from 'react-router';

export default class ItemListDisplay extends React.Component {
  render() {
    let { techName } = this.props.params;
    return (
      <div>
        <li><Link to="/">Home</Link></li>
        <h1>Tech Name: {techName}</h1>
      </div>
    );
  }
};
