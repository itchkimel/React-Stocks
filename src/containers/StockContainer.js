import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    // console.log(this.props.allStocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.filteredStock.map(stock => <Stock stock={stock} portfolioAdd={this.props.portfolioAdd}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
