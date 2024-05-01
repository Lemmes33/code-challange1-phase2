import React from 'react'

var array=[
    {
        date: "01-12-2019",
        description : "Paycheck from Bob's Burgers",
        category : "Income",
        amount : "1000",
    },
    {
        date: "01-12-2019",
        description : "South by Southwest Quinoa Bowl at Fresh & Co",
        category : "Food",
        amount : "-10.55",
    },
    {
        date: "02-12-2019",
        description : "South by Southwest Quinoa Bowl at Fresh & Co",
        category : "Food",
        amount : "-10.55",
    },
    {
        date: "04-12-2019",
        description : "Sunglasses, Urban Outfitters",
        category : "Fashion",
        amount : "-24.99",
    },
    {
        date: "06-12-2019",
        description : "Venmo, Alice pays you for a Burrito",
        category : "Food",
        amount : "8.75",
    },
    {
        date: "06-12-2019",
        description : "Chipotle",
        category : "Food",
        amount : "-17.59",
    },
]
// show table data

function showtable(curarray) {
  document.getElementById("mytable").innerHTML=`
  <tr className='bg-primary text-white fw-bold'>
    <td>Date</td>
    <td>Description</td>
    <td>Category</td>
    </tr>
    `;

    // for checking array is empty
    if(curarray==""){
        document.getElementById("error").innerHTML=
        `<span className="text-danger">NOT FOUND</span>`
    }else{
        document.getElementById("error").innerHTML="";

        for(var i=0;i<curarray.length;i++){
            document.getElementById("mytable").innerHTML +=`
            <tr>
            <td>${curarray[i].date}</td>
            <td>${curarray[i].description}</td>
            <td>${curarray[i].category}</td>
            </tr>
            `
        }
    }
        
    }
// calling show tble data method
showtable(array);

export default showtable;