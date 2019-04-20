import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getSmurfs} from "../actions";

class SmurfsList extends Component {

  componentDidMount() {
    // call our action
    this.props.getSmurfs()
  }

  render() {

    if (this.props.fetchingSmurfs) {
      // return something here to indicate that you are fetching data      
      return <p>Loading</p>
    } 
    return (
      <div>
        
        <ul>{this.props.smurfs.map(smurf => <li key={smurf.id}>{smurf.name}</li>)}</ul>        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { smurfs: state.smurfs, fetchingSmurfs: state.fetchingSmurfs }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfsList);
