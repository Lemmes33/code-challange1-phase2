import React from 'react'

function Searchbox(props) {
  
  return (
    <div className="search-component">
  <input type="text" className="search-box" placeholder="Search your Recent Transactions"></input>
  <button class="search-button">
    <i class="fas fa-search"></i> </button>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqFJREFUSEuN1c2rVWUUBvDfImkQZnADrUlYxLWBqRREgwwqUCpoqgU1MIKCdFDQwD9AaVJcMqqBgUYI/QHRKMiocHKvBFEkBGE0KDJJyo8+lnfvs/c97z77PXH36Jz3Y30863meN8x+gSwXRwt0S9OdypkuRLPTXRgemn9lVFIfYG2jTFwkGF28A0/jCezsdleCjzOckn5aTxGTBEU7GTbJ+IB8apCyhCWkjI9CHkj+WsOsEmwWoptwhthOXsV7xFLIH7qx3BW8kuEF6cbJWbvxdw24Hv2ygJPCszLOk3uFb4cDXwuzg/iEvB1vEK/OMGMNkxKie4Ovk3+IB8iVyam5LHoYnwnXZNxJ/jzuIkQx8bfIl3EMB0ex6xP9EM/gMI4OZtkFKBOcI+/GdnzTxiuDVn4HjySfEp+TTUczX7T999+faIZ8A/6rFzzSykLyGy7g1gmaYz31Cf7AzdiIJllJ3nli3JhcIn4lN49pPeggzpKNoO7H8jpn8CC+0sLksRpVSyW/jtfwLl5ajyXhBJ4jGoIc6lnX6rDov0+8iO/w75CmJVJNy42IW0NsBHa6Y/G06wGxBzRtAx0XDsj4MeSe5PvZUXT/dzVCC7klW7V7sS6ZfgZTPDqraKl6Be8Qb4Y837W82FoFz2NDl6yZwd7gUgnLEKKOXh12t6AR0JM13+8gurjqRUeC/cl9aFT/KC6OlVBgMMW3xXrrKkSNSh8PdiSXieVV6L5M3sbvWJgwKHaSZzsmXZjKoZ/BPMWW5cw3/ybJF8E9yTk8FPzS662wimG0gi09+1rDrNM3NpOnsc1kPu9PKVvErSi9pp2Kwtul21btfZ+0NABknqmtR2j1goZ4D57Merl1G519iMrBlo9PaRUDrEfJ/te/K6V1dV0H5Vz0JXqqDXQAAAAASUVORK5CYII="/>
</div>

  )
}

export default Searchbox