import React, { Component } from 'react';
import './CoinTransaction.css';
//import {Bootstrap, Grid, Row, Col, Table} from 'react-bootstrap';
import { roundTo } from '../lib/util';

class CoinTransaction extends Component {

    render(props) {

        let originalCost = this.props.amountBought * this.props.priceBoughtAt;
        let currentValue = this.props.amountBought * this.props.currentPrice;
        let profitOrLoss = currentValue - originalCost;


        return (

            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.dateBought}</td>
                <td>{this.props.amountBought}</td>
                <td>£{roundTo(this.props.priceBoughtAt, 2)}</td>
                <td>£{roundTo(originalCost, 2)}</td>
                <td>£{roundTo(currentValue, 2)}</td>
                <td className={profitOrLoss >=0 ? "inProfit" : "inLoss"}>£{roundTo(profitOrLoss, 2)}</td>
            </tr>

        );
    }


}

export default CoinTransaction;