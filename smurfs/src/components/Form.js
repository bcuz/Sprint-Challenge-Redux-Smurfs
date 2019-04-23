import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSmurf } from "../actions";

class Form extends Component {
  state = {
    name: '',
    age: '',
    height: '',
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

  render() {
    return (
      <div>
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
    )
  }

}

export default connect(null, {addSmurf})(Form);