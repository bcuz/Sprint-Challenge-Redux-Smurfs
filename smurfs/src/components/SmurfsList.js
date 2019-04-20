import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getSmurfs, deleteSmurf} from "../actions";
import Form from "./Form";

class SmurfsList extends Component {

  componentDidMount() {
    // call our action
    this.props.getSmurfs()
  }  

  deleteSmurf = id => {
    this.props.deleteSmurf(id)
  }

  render() {

    if (this.props.error) {
      return (
      <div>
        <p>{this.props.error}</p>
        <p>try reloading the page</p>
      </div>
      )
    } 
    return (
      <div>
      {this.props.fetchingSmurfs && <p>Loading...</p>}

      {!this.props.fetchingSmurfs && this.props.smurfs.length > 0  && (<ul>{this.props.smurfs.map(smurf => <li key={smurf.id}><button onClick={() => this.deleteSmurf(smurf.id)}>X</button>{smurf.name} is {smurf.age} years old</li>)}</ul>)    }
      
      <Form />

        </div>
    );
  }
}

const mapStateToProps = state => {
  return { smurfs: state.smurfs, 
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
 }
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(SmurfsList);
