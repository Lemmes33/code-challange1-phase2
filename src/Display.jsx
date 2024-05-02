import React from 'react'
import './display.css'
import Description from './Description'
import Category from './Category'

function Display() {
  return (
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2019-12-01</th>
      <td>Paycheck from Bob's Burgers</td>
      <td>Income</td>
      <td>1000</td>
    </tr>
    <tr>
      <th scope="row">2019-12-01</th>
      <td>South by Southwest quinoa Bowl at Fresh & Co</td>
      <td>Food</td>
      <td>-10.55</td>
    </tr>
    <tr>
      <th scope="row">2019-12-02</th>
      <td colspan="2">South by Southwest quinoa Bowl at Fresh & Co</td>
      {/* <td>Food</td> */}
      <td>-10.55</td>
    </tr>
    <tr>
      <th scope="row">2019-12-04</th>
      <td colspan="2">Sunglasses Urban Outfitters</td>
      
      <td>-24.99</td>
    </tr>
    <tr>
      <th scope="row">2019-12-06</th>
      <td colspan="2">Venmo, Allice pays you for Burito</td>
      <td>8.75</td>
    </tr>
    <tr>
      <th scope="row">2019-12-06</th>
      <td colspan="2">Chipotle</td>
      <td>-17.59</td>
    </tr>
  </tbody>
</table>
  )
}

export default Display