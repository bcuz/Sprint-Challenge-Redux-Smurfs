import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getSmurfs} from "../actions";

class SmurfsList extends Component {

  componentDidMount() {
    // call our action
    this.props.getSmurfs()
  }

  render() {
    return (
      <div>
      {!this.props.fetchingData && this.props.smurfs.length > 0  && (
        
        <ul>{this.props.smurfs.map(smurf => <li key={smurf.id}>{smurf.name}</li>)}</ul>
        )}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { smurfs: state.smurfs }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfsList);
