import React from 'react'

function Searchbox(props) {
  
  return (
    <div className="search-component">
  <input type="text" className="search-box" placeholder="Search here..."></input>
  <button class="search-button">
    <i class="fas fa-search"></i> </button>
</div>

  )
}

export default Searchbox