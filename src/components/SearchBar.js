import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.value === 'Alphabetically' ? true : false } 
        onChange={(e)=>{props.sortButton(e)}}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.value === 'Price' ? true : false} 
        onChange={(e) => {props.sortButton(e)}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => {props.filterStocks(e)}}>
          <option disabled selected>Select Filter</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
