import React from 'react';

export default class ItemSearch extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Search Your Tech</label>
          <input type="text" defaultValue="Search Here...." />
          <button>Search</button>
        </form>
      </div>
    );
  }
};
