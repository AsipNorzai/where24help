import React from 'react';
import { Link } from 'react-router';

export default class ItemListDisplay extends React.Component {
  render() {
    let { techName } = this.props.params;
    let links = [];
    this.props.itemData.map(data => {
      data.name === techName ? links.push(data.links) : '';
    });
    const printLinks = links[0].map(link => <a href={link.link} target="_blank"><li>{link.name}</li></a>);
    return (
      <div>
        <li><Link to="/">Home</Link></li>
        <div>
          <ul>
            {printLinks}
          </ul>
        </div>
      </div>
    );
  }
};
