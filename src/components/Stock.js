import React from 'react'

const Stock = (props) => (
  
  <div onClick={props.portfolioAdd ?
                                    ()=> props.portfolioAdd(props.stock)
                                    : ()=> props.portfolioRemove(props.stock) }>
    {/* {console.log(props)} */}
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            `${props.stock.ticker}: ${props.stock.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock