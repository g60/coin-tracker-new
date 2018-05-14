import React, { Component } from 'react';
//import './CoinTransactions.css';
import CoinHolding from './CoinHolding';
import {Grid, Row, Col, Table} from 'react-bootstrap';

class CoinHoldings extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        //console.log("currentPrice: " + this.props.currentPrice);
        this.setState({currentPrice: this.props.currentPrice});
    }

    render(props) {

        let self = this;

        /*
        let thisCoinTransactions = this.props.transactions.filter(function (ct) {
            return (ct.symbol === self.props.symbol);
        });
        */

       let thisCoinTransactions = this.props.transactions.slice();

        thisCoinTransactions.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.dateBought) - new Date(b.dateBought);
        });

        console.log("results: " + thisCoinTransactions.length);

        if (thisCoinTransactions.length === 0) {

            return (
                <h4>No Holdings for {this.props.symbol}</h4>
            );

        } else {

            let output = [];

            let holdingRunningTotal = 0;

            let profitOrLoss = 0;

            for (let i=0; i<thisCoinTransactions.length; i++){

                let amountBought = thisCoinTransactions[i].amountBought;
                let priceBoughtAt = thisCoinTransactions[i].priceBoughtAt;

                let amountSold = thisCoinTransactions[i].amountSold;
                let priceSoldAt = thisCoinTransactions[i].priceSoldAt;

                let date = thisCoinTransactions[i].dateBought ? thisCoinTransactions[i].dateBought : thisCoinTransactions[i].dateSold;

                let previousHolding = holdingRunningTotal;

                holdingRunningTotal = holdingRunningTotal + amountBought - amountSold;

                profitOrLoss = profitOrLoss - (amountBought * priceBoughtAt) + (amountSold * priceSoldAt)

                console.log("previousHolding: " + previousHolding);
                console.log("amount bought: " + amountBought);
                console.log("price bought at: " + priceBoughtAt);
                console.log("amount sold: " + amountSold);
                console.log("price sold at: " + priceSoldAt);
                console.log("holdingRunningTotal: " + holdingRunningTotal);
                console.log("realised profit / loss: " + profitOrLoss);
                console.log("current value: " + (holdingRunningTotal * self.state.currentPrice)); 

                output.push(<CoinHolding    symbol={this.props.symbol}
                                            date={date}
                                            previousHolding={previousHolding}
                                            amountBought={amountBought}
                                            priceBoughtAt={priceBoughtAt}
                                            amountSold={amountSold}
                                            priceSoldAt={priceSoldAt}
                                            resultingHolding={holdingRunningTotal}
                                            realisedProfitOrLoss={profitOrLoss}
                                            currentPrice={this.props.currentPrice} />
                );

            }

            return (
                <div>
                    <h4>Holdings History for {this.props.symbol}</h4>
                    <Grid>
                        <Row className="">
                            <Col md={2}></Col>
                            <Col md={8}>

                                <Table striped bordered condensed hover>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Previous Holding</th>
                                            <th>Amount Bought</th>
                                            <th>Price Bought At</th>
                                            <th>Amount Sold</th>
                                            <th>Price Sold At</th>
                                            <th>Resulting Holding</th>
                                            <th>Realised Profit / Loss</th>
                                            <th>Value at Current Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {output.map(function(item, i){
                                            return item;
                                        })}
                                    </tbody>
                                </Table>;

                            </Col>
                            <Col md={2}></Col>
                        </Row>

                        <Row className="coin-data-row-2">
                            <Col md={4}></Col>
                            <Col md={4}>
                            </Col>
                            <Col md={4}></Col>
                        </Row>
                    </Grid>
                </div>
            );
        }
    }


}

export default CoinHoldings;