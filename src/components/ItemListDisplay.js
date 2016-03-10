import React from 'react';
import { Link } from 'react-router';

export default class ItemListDisplay extends React.Component {
  render() {
    let { techName } = this.props.params;
    let links = [];
    this.props.itemData.map(data => {
      data.name === techName ? links.push(data.links) : '';
    });
    const printLinks = links[0].map(link => <a href={link.link} className="collection-item" target="_blank">{link.name}</a>);
    return (
      <div className="row">
        <div className="col s12 m8 offset-m1">
          <Link to="/" className="waves-effect waves-light btn-large">Home</Link>
          <div className="collection">
            {printLinks}
          </div>
        </div>
      </div>
    );
  }
};
