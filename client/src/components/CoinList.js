import React, { Component } from 'react';
import CoinListDataItem from './CoinListDataItem';
//import {Bootstrap, Grid, Row, Col, Table} from 'react-bootstrap';
import CoinTransactions from './CoinTransactions';
import CoinHoldings from './CoinHoldings';


class CoinList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            coinData: [],
        };
        
    }

    componentDidMount() {
        
        /* working
        fetch('https://randomuser.me/api/?results=10')
        .then(results => {
            //console.log("results: " + results.json())
            return results.json();
        }).then(data => {
            
            let pictures = data.results.map((pic) => {
                console.log("pic: " + pic.picture.medium)
                return (
                    <div key={pic.results}>
                        <img src={pic.picture.medium} />
                    </div>
                )
                

            })
            this.setState({pictures: pictures});
            console.log("coindata: ", pictures);
        })
        */


        /*
        {
            id: 1,
            name: "Bitcoin",
            symbol: "BTC",
            website_slug: "bitcoin",
            rank: 1,
            circulating_supply: 17023450,
            total_supply: 17023450,
            max_supply: 21000000,
            quotes: {
                USD: {
                price: 9087.77,
                volume_24h: 7720530000,
                market_cap: 154705198207,
                percent_change_1h: -0.18,
                percent_change_24h: -3.06,
                percent_change_7d: -0.48
                },
                GBP: {
                price: 6714.61700551,
                volume_24h: 5704413957.39,
                market_cap: 114305946862,
                percent_change_1h: -0.18,
                percent_change_24h: -3.06,
                percent_change_7d: -0.48
                }
            },
            last_updated: 1525853971
        },
        */


       fetch('https://api.coinmarketcap.com/v2/ticker/?convert=GBP&limit=100')
       .then(results => {
           //console.log("results: " + results.json())
           return results.json();
       }).then(data => {
           

            let obj = data.data;

            let coinData = [];
            let coinTransactions = [];

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var val = obj[key];
                    //console.log(val.name);
                    //console.log(val.quotes.GBP.price);
                    
                if (val.symbol === "BTC" ||
                    val.symbol === "LTC" ||
                    val.symbol === "XRP" )
                    {

                        let thisCoinTransactions = this.props.allTransactions.filter(function (ct) {
                            return (ct.symbol === val.symbol);
                        });

                        coinData.push(<CoinListDataItem     key={val.symbol}
                                                            symbol={val.symbol}
                                                            name={val.name} 
                                                            price_gbp={val.quotes.GBP.price}
                                                            percentChange_24hr={val.quotes.GBP.percent_change_24h}
                                                            percentChange_7d={val.quotes.GBP.percent_change_7d}
                                                            />
                        );

                        coinData.push(<CoinTransactions   key={"coinTrans_" + val.symbol} 
                                                                  symbol={val.symbol}
                                                                  currentPrice={val.quotes.GBP.price}
                                                                  transactions={thisCoinTransactions}/>
                        );

                        coinData.push(<CoinHoldings   key={"coinHolds_" + val.symbol} 
                                                                  symbol={val.symbol}
                                                                  currentPrice={val.quotes.GBP.price}
                                                                  transactions={thisCoinTransactions}/>
                        );

                        coinData.push(<hr key={"hr_" + val.symbol}/>);
                    }
                }
            }




            this.setState({coinData: coinData,
                           //coinTransactions: coinTransactions
                        });
            //console.log("coindata: ", coinData);
        });
    
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.coinData}
                </div>

                
            </div>
        );
    }

}

export default CoinList;