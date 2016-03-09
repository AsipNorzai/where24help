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
    const n = libs.map(n =>
    <div className="col s8 offset-s2 m4 l2" key={Math.random(Date.now())}>
        <div className="card">
          <div className="card-image">
            <Link to={`/tech/${n.name}`}><img src={n.img} /></Link>
          </div>
          <div className="nameClass">
            <span className="card-content name"><Link to={`/tech/${n.name}`}>{n.name}</Link></span>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <div className="row">
          <form className="col s12 m6 offset-m2">
            <div className="row">
              <div className="input-field col s12">
                <input type="text" value={this.state.searchValue} onChange={this.handleChange}/>
                <label>Filter Result</label>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          {n}
        </div>
      </div>
    );
  }
};
