import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getSmurfs, addSmurf, deleteSmurf} from "../actions";

class SmurfsList extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  componentDidMount() {
    // call our action
    this.props.getSmurfs()
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state)

    this.setState({
      name: '',
      age: '',
      height: '',
    });
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
      
      <h2>add new smurf</h2>
        <form onSubmit={this.handleSubmit} action="">
        <label>Name</label>
          <input required onChange={this.handleInputChange} value={this.state.name} name="name" />
          <label>Age</label>
          <input type="number"
 required onChange={this.handleInputChange} value={this.state.age} name="age" />
          <label>Height</label>
          <input required onChange={this.handleInputChange} value={this.state.height} name="height" />
          <input type='submit' />
        </form>

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

export default connect(mapStateToProps, {getSmurfs, addSmurf, deleteSmurf})(SmurfsList);
