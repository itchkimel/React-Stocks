import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.props.portifolioStocks.map(stock => <Stock stock={stock} portfolioRemove={this.props.portfolioRemove}/>)
        }
      </div>
    );
  }

}

export default PortfolioContainer;
