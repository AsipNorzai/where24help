import React from 'react';
import { Link } from 'react-router'
import ItemListDisplay from './ItemListDisplay';
// import ItemSearch from './ItemSearch';

export default class ItemDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value});
  }

  render() {
    let libs = this.props.data;
    let searchValue = this.state.searchValue.trim().toLowerCase();
    if(searchValue.length > 0){
      libs = libs.filter(function(l){
        return l.name.toLowerCase().match( searchValue );
      });
    }
    const n = libs.map(n => <li key={Math.random(Date.now()) + 1}><Link to={`/tech/${n.name}`}>{n.name}</Link></li>);
    return (
      <div>
        <form>
          <label>Search Your Tech</label>
          <input type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search" />
        </form>
        <ul>
          {n}
        </ul>
      </div>
    );
  }
};
