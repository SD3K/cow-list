import React from 'react';
import Header from './Header.jsx';
import CowList from './CowList.jsx';
import AddForm from './AddForm.jsx';
import cows from './sample.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: cows
    };

    this.addCow = this.addCow.bind(this);
  }

  addCow(cow) {
    console.log(this.state.cows, cow);
    const cows = [...this.state.cows, cow];
    this.setState({ cows });
  }

  render() {
    return(
      <div>
        <Header />
        <AddForm addCow={this.addCow} cows={this.state.cows} />
        <CowList cows={this.state.cows} />
      </div>
    );
  }
}

export default App;
