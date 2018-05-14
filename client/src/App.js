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
    this.getPasswords();
    this.getTransactions();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  getTransactions = () => {
    // Get the passwords and store them in state
    fetch('/api/transactions')
      .then(res => res.json())
      .then(allTransactions => this.setState({ allTransactions }));
  }

  render() {

    const { passwords } = this.state;

    return (
      <div className="App">
        
        <CoinList allTransactions={this.state.allTransactions} />

        <div className="App">
                {/* Render the passwords if we have them */}
                {passwords.length ? (
                  <div>
                    <h1>5 Passwords.</h1>
                    <ul className="passwords">
                      {/*
                        Generally it's bad to use "index" as a key.
                        It's ok for this example because there will always
                        be the same number of passwords, and they never
                        change positions in the array.
                      */}
                      {passwords.map((password, index) =>
                        <li key={index}>
                          {password}
                        </li>
                      )}
                    </ul>
                    <button
                      className="more"
                      onClick={this.getPasswords}>
                      Get More
                    </button>
                  </div>
                ) : (
                  // Render a helpful message otherwise
                  <div>
                    <h1>No passwords :(</h1>
                    <button
                      className="more"
                      onClick={this.getPasswords}>
                      Try Again?
                    </button>
                  </div>
                )}
              </div>

      </div>
    );
  }
}

export default App;
