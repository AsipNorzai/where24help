import React from 'react';

export default class ItemSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value});
  };
  render() {
    return (
      <div>
        <form>
          <label>Search Your Tech</label>
          <input type="text" defaultValue="Search Here...."/>
          <button className="btn" type="text">Search</button>
        </form>
      </div>
    );
  }
};
