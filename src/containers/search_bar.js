import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from './../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    //give this in _onInputChange the class context
    this._onInputChange = this._onInputChange.bind(this);
    this._onSubmitForm = this._onSubmitForm.bind(this);
  }

  _onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  _onSubmitForm(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this._onSubmitForm}>
        <input
          className="form-control"
          value={this.state.term}
          onChange={this._onInputChange}
          placeholder="Get a five-day forecast"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
