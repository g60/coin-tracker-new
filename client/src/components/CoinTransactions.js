import React, { Component } from 'react';
//import './CoinTransactions.css';
import CoinTransaction from './CoinTransaction';
import {Grid, Row, Col, Table} from 'react-bootstrap';

class CoinTransactions extends Component {

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
                <h4>No Transactions for {this.props.symbol}</h4>
            );

        } else {

            return (
                <div>
                    <h4>Transactions for {this.props.symbol}</h4>
                    <Grid>
                        <Row className="">
                            <Col md={3}></Col>
                            <Col md={6}>

                                <Table striped bordered condensed hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date of Transaction</th>
                                            <th>Amount Bought</th>
                                            <th>Price Bought At</th>
                                            <th>Total Cost</th>
                                            <th>Current Value</th>
                                            <th>Current Profit / Loss</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {thisCoinTransactions.map(function(item, i){
                                            return <CoinTransaction key={i} 
                                                                    symbol={item.symbol}
                                                                    dateBought={item.dateBought}
                                                                    amountBought={item.amountBought}
                                                                    priceBoughtAt={item.priceBoughtAt}
                                                                    currentPrice={self.state.currentPrice}
                                                                    name={item.name}/>
                                        })}
                                    </tbody>
                                </Table>;

                            </Col>
                            <Col md={3}></Col>
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

export default CoinTransactions;