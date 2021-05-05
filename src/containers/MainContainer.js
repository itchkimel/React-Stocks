import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const BASE_URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    allStocks: [],
    portifolioStocks: [],
    filteredStock: [],
  }

  componentDidMount(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(allStocks => this.setState({allStocks, filteredStock: allStocks}))
  }

  sortButton = (e) => {
    // console.log(e.target)
    if (e.target.value === 'Alphabetically'){
      this.setState(this.state.allStocks.sort((a,b)=> a.name.localeCompare(b.name) ))
    }else{this.setState(this.state.allStocks.sort((a,b)=> a.price - b.price ))}
  }

  filterStocks = (e) => {
    const targetValue = e.target.value
    // console.log(targetValue)
    if (targetValue === 'Finance'){
      this.setState({
        filteredStock: [...this.state.allStocks].filter(stock => stock.type === targetValue)})
    }else if (targetValue === 'Tech'){
      this.setState({
        filteredStock: [...this.state.allStocks].filter(stock => stock.type === targetValue)})
    }else if (targetValue === 'Sportswear'){
      this.setState({
        filteredStock: [...this.state.allStocks].filter(stock => stock.type === targetValue)})
    }
  }

  portfolioAdd = (stockObj) => {
    // console.log(stockObj)
    this.setState({
      portifolioStocks: [...this.state.portifolioStocks, stockObj]
    })
  }
  portfolioRemove = (stockObj) => {
    this.setState({
      portifolioStocks: this.state.portifolioStocks.filter(stock => stock !== stockObj)
    })

  }


  render() {
    return (
      <div>
        <SearchBar sortButton={this.sortButton} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filteredStock={this.state.filteredStock} portfolioAdd={this.portfolioAdd}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portifolioStocks={this.state.portifolioStocks} portfolioRemove={this.portfolioRemove}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
