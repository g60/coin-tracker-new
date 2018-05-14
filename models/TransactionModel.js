// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var transactionSchema = new Schema({
    symbol: String,
    dateBought: Date,
    //password: { type: String, required: true },
    //admin: Boolean,
    //location: String,
    //meta: {
        //age: Number,
        //website: String
    //},
    //created_at: Date,
    //updated_at: Date
  
    amountBought: Number,
    priceBoughtAt: Number,
    dateSold: Date,
    amountSold: Number,
    priceSoldAt: Number,
    name: String,
});

// the schema is useless so far
// we need to create a model using it
var Transaction = mongoose.model('Transaction', transactionSchema);

// make this available to our users in our Node applications
module.exports = Transaction;