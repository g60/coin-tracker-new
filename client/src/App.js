import React, { Component } from 'react';
import CoinList from './components/CoinList';
import './App.css';

class App extends Component {


  constructor(props){
    super(props)

    this.state = {
      passwords: [],
      //coinData: [],
      //coinTransactions: [],           
      allTransactions: [],
    };

  }

  // Fetch passwords after first mount
  componentDidMount() {
    //this.getPasswords();
    this.getTransactions();
  }
/*
  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }
*/
  getTransactions = () => {
    // Get the passwords and store them in state
    fetch('/api/transactions')
      .then(res => res.json())
      .then(allTransactions => this.setState({ allTransactions }))
      .then(() => {
        console.log(`fetched ${this.state.allTransactions.length} transactions`);
      });
    
  }

  render() {

    //const { passwords } = this.state;

    return (
      <div className="App">
        
        <CoinList allTransactions={this.state.allTransactions} />

      </div>
    );
  }
}

export default App;
