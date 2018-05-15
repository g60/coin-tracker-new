const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
//const generatePassword = require('password-generator');
var config = require('./config');
var Transaction = require('./models/TransactionModel');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// connect to database

//const url = process.env.MONGODB_URI;
//const url = myConfig.MONGODB_URI;
//const url = process.env.MONGODB_URI || config.mongodb_url;

const url = "mongodb://heroku_2wk9ltj1:5jtcqmflvilqgjab10f1psrvtv@ds117960.mlab.com:17960/heroku_2wk9ltj1";

console.log("mongo url: " + url);

mongoose.Promise = global.Promise;
mongoose.connect(url, 
                
                function(err) {
                  // Check error in initial connection. There is no 2nd param to the callback.
                  if (err) {
                    console.log('Unable to connect to the mongoDB server. Error:', err);
                  } else {
                    console.log('Connection established to', url);
                  }
                }
);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/*
// create a new user called chris
var tran1 = new Transaction({
  symbol: 'XRP',
  dateBought: "2017-11-20", 
  amountBought: 255.7776,
  priceBoughtAt: 0.19531860370636582393199787493359,
  dateSold: "",
  amountSold: "",
  priceSoldAt: "",
  name: "Tester1",
});

tran1.save(function(err) {
  if (err) {
    console.log("error saving: " + err);
  } else {
    console.log('Transaction successfully saved.');  
  }; 
});
*/

/*
Transaction.find({}, function(err, transactions) {

  if (err) {
    console.log("Error finding transactions");
  } else {
    console.log(transactions);
  }

});
*/

/*

Transaction.find({}, function(err, transactions) {

  if (err) {
    console.log("Error finding transactions");
  } else {
    
    // delete him
    transactions.remove(function(err) {
    if (err) {
      console.log("Error deleting transactions");
    } else {
      console.log('transactions successfully deleted!');
    }

    
  });

  }

});

*/

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
app.get('/api/seed-data', (req, res) => {

  //db.collection('transactions').drop();

  Transaction.find({}, function(err, transactions) {

    if (err) {
      console.log("Error finding transactions");
    } else {
      console.log(transactions);
      db.collection('transactions').drop();
      console.log("dropped");
    }
  
  }).then(() => {
    
    /*
    var tran1 = new Transaction({
      symbol: 'XRP',
      dateBought: "2017-11-20", 
      amountBought: 255.7776,
      priceBoughtAt: 0.19531860370636582393199787493359,
      dateSold: "",
      amountSold: "",
      priceSoldAt: "",
      name: "Tester1",
    });

    tran1.save(function(err) {
      if (err) {
        console.log("error saving: " + err);
      } else {
        console.log('Transaction successfully saved.');  
      }; 
    });
    */

    let allTransactions = [
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

    /*
    for (let i=0; i<allTransactions.length;i++){
      //console.log("tran:" + allTransactions[i]);
      //console.log("symbol: " + allTransactions[i].symbol);

      let tran1 = new Transaction({
        symbol: allTransactions[i].symbol,
        dateBought: allTransactions[i].dateBought, 
        amountBought: allTransactions[i].amountBought,
        priceBoughtAt: allTransactions[i].priceBoughtAt,
        dateSold: allTransactions[i].dateSold,
        amountSold: allTransactions[i].amountSold,
        priceSoldAt: allTransactions[i].priceSoldAt,
        name: allTransactions[i].name,
      });
      
      tran1.save(function(err) {
        if (err) {
          console.log("error saving: " + err);
        } else {
          console.log('Transaction successfully saved.');  
        }; 
      });
    }
    */

    db.createCollection('transactions');
    db.collection('transactions').insertMany(allTransactions);

    res.send("Complete");

  });
});

// Put all API endpoints under '/api'
app.get('/api/transactions', (req, res) => {
  
  let allTransactions = [];

  Transaction.find({}, function(err, allTransactions) {

    if (err) {
      console.log("Error finding transactions");
    } else {
      console.log(allTransactions);
      //db.collection('transactions').drop();
      //console.log("dropped");
      console.log(`Found ${allTransactions.length} transactions`);
      res.json(allTransactions);

      console.log(`Sent ${allTransactions.length} transactions`);
    }
  
  });
/*
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
*/
  

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);