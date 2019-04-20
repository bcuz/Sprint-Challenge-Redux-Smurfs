import React, { Component } from 'react';
import { connect } from 'react-redux'
// import {getFriends} from "../actions";

class SmurfsList extends Component {

  componentDidMount() {
    // call our action
    // this.props.getFriends()
  }

  render() {
    return (
      <div>
      {this.props.smurfs[0]}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { smurfs: state.smurfs }
}

export default connect(mapStateToProps, {})(SmurfsList);
