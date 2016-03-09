import React from 'react';

export default class ItemSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value});
    this.props.handleChange(this.state.searchValue.trim().toLowerCase());
  };
  render() {
    return (
      <div>
      </div>
    );
  }
};
