import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cowname: '',
      cowdescription: ''
    };

    this.handleCowNameChange = this.handleCowNameChange.bind(this);
    this.handleCowDescriptionChange = this.handleCowDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCowNameChange(event) {
    this.setState({cowname: event.target.value});
  }

  handleCowDescriptionChange(event) {
    this.setState({cowdescription: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCow({cowname: this.state.cowname, cowdescription: this.state.cowdescription});
    this.setState({cowname: '', cowdescription: ''});
  }

  render() {
    return(
      <form className="add-cow-form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.cowname} onChange={this.handleCowNameChange} />
        </label>
        <label>
          Description:
          <input type="text" value={this.state.cowdescription} onChange={this.handleCowDescriptionChange} />
        </label>
        <button type="submit">Add a cow</button>
      </form>
    );
  }
}

export default AddForm;
