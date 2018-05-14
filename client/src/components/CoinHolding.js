import React, { Component } from 'react';
import './CoinHolding.css';
//import {Bootstrap, Grid, Row, Col, Table} from 'react-bootstrap';
import { roundTo } from '../lib/util';

class CoinHolding extends Component {

    render(props) {

        let currentValue = this.props.resultingHolding * this.props.currentPrice;
        
        return (

            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.previousHolding}</td>
                <td>{this.props.amountBought}</td>
                <td>£{this.props.priceBoughtAt}</td>
                <td>{this.props.amountSold}</td>
                <td>£{this.props.priceSoldAt}</td>
                <td>{this.props.resultingHolding}</td>
                <td className={this.props.realisedProfitOrLoss >=0 ? "inProfit" : "inLoss"}>
                    £{roundTo(this.props.realisedProfitOrLoss, 2)}
                </td>
                <td>£{roundTo(currentValue, 2)}</td>
            </tr>

        );
    }


}

export default CoinHolding;