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
            //coinTransactions: [],           
            allTransactions: [
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
                    name: "David",
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
                }
            ],
            
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

                        let thisCoinTransactions = this.state.allTransactions.filter(function (ct) {
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