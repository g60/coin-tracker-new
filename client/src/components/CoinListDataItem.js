import React, { Component } from 'react';
import './CoinListDataItem.css';
import {Grid, Row, Col} from 'react-bootstrap';
import { roundTo } from '../lib/util';

class CoinListDataItem extends Component {

    

    render(props) {
        return (

            <Grid>
                <Row className="coin-data-row-1">
                    <Col md={3}></Col>
                    <Col md={3}>
                        <h1><span className="coin-symbol">{this.props.symbol}</span> | {this.props.name}</h1>
                    </Col>
                    <Col md={3}><h1>£{roundTo(this.props.price_gbp, 2)}</h1></Col>
                    <Col md={3}></Col>
                </Row>

                <Row className="coin-data-row-2">
                    <Col md={4}></Col>
                    <Col md={2}>
                        <h3>
                            24h: {this.props.percentChange_24hr}
                        </h3>
                    </Col>
                    <Col md={2}>
                        <h3>
                            7d: {this.props.percentChange_7d}
                        </h3>
                    </Col>

                    <Col md={4}></Col>
                </Row>
            </Grid>

        );
    }


}

export default CoinListDataItem;