const express = require('express');
const path = require('path');
//const generatePassword = require('password-generator');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  /*
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )
  */

  const passwords = ["123", "456", "789"];

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// Put all API endpoints under '/api'
app.get('/api/transactions', (req, res) => {
  
  const allTransactions = [
    {
        symbol: "XRP",
        dateBought: "2017-11-20", 
        amountBought: 255.7776,
        priceBoughtAt: 0.19531860370636582393199787493359,
        dateSold: "",
        amountSold: "",
        priceSoldAt: "",
        name: "David",
    },
    {
        symbol: "LTC",
        dateBought: "2017-11-18", 
        amountBought: 0.92701669,
        priceBoughtAt: 51.57,
        dateSold: "",
        amountSold: "",
        priceSoldAt: "",
        name: "David",
    },
    {
        symbol: "ETH",
        dateBought: "2017-11-18", 
        amountBought: 0.18720073,
        priceBoughtAt: 255.39,
        dateSold: "",
        amountSold: "",
        priceSoldAt: "",
        name: "David",
    },
    {
        symbol: "BTC",
        dateBought: "2017-11-18", 
        amountBought: 0.00803233,
        priceBoughtAt: 5952.20,
        dateSold: "",
        amountSold: "",
        priceSoldAt: "",
        name: "David",
    },
    {
        symbol: "ETH",
        dateBought: "2017-11-18", 
        amountBought: 0.18515643,
        priceBoughtAt: 258.21,
        dateSold: "",
        amountSold: "",
        priceSoldAt: "",
        name: "David",
    },
    {
        symbol: "BTC",
        dateBought: "2017-12-06", 
        amountBought: 0.03379108,
        priceBoughtAt: 10018.62,
        dateSold: "",
        amountSold: "",
        priceSoldAt: "",
        name: "David",
    },
    {//MICHAEL
        symbol: "BTC",
        dateBought: "2017-12-11", 
        amountBought: 0.00369789,
        priceBoughtAt: 12928.99,
        dateSold: "",
        amountSold: "",
        priceSoldAt: "",
        name: "Michael",
    },
    {//MICHAEL
        symbol: "LTC",
        dateBought: "2017-12-11", 
        amountBought: 0.38003860,
        priceBoughtAt: 125.80,
        dateSold: "",
        amountSold: "",
        priceSoldAt: "",
        name: "Michael",
    },
    {
        symbol: "BTC",
        dateBought: "", 
        amountBought: 0,
        priceBoughtAt: 0,
        dateSold: "2017-12-11",
        amountSold: 0,
        priceSoldAt: 0,
        name: "David1",
    },
    {
        symbol: "XRP",
        dateBought: "", 
        amountBought: 0,
        priceBoughtAt: 0,
        dateSold: "2017-12-11",
        amountSold: 50,
        priceSoldAt: 100,
        name: "",
    },
  ];

  res.json(allTransactions);

  console.log(`Sent ${allTransactions.length} transactions`);

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);