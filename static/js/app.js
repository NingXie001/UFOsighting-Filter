// from data.js
var tableData = data;

var datetime = d3.select("#datetime");

var filterbutton = d3.select("filter-btn");

//Your code here

// select tbody
tbody = d3.select("tbody")

// add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(UFOsighting){
    var row = tbody.append("tr")
    Object.entries(UFOsighting).forEach(function([key, value]){
        var cell = row.append("td").text(value)	
    })
})}

displayData(tableData)


// data filter 
function filterdate(){
    d3.event.preventDefault();
    console.log(datetime.property("value"));
    var new_table = tableData.filter(UFOsighting => UFOsighting.datetime===datetime.property("value"))
    displayData(new_table)
}

// buttons setting
datetime.on("change", filterdate)
filterbutton.on("click", filterdate)

// set multiple button
var city = d3.select("#city")
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");

//city
function filtercity(){
    d3.event.preventDefault();
    console.log(city.property("value"));
    var new_table = tableData.filter(UFOsighting => UFOsighting.city===city.property("value"))
    displayData(new_table)
}

city.on("change", filtercity)
filterbutton.on("click", filtercity)

//state
function filterstate(){
    d3.event.preventDefault();
    console.log(state.property("value"));
    var new_table = tableData.filter(UFOsighting => UFOsighting.state===state.property("value"))
    displayData(new_table)
}

state.on("change", filterstate)
filterbutton.on("click", filterstate)

//country
function filtercountry(){
    d3.event.preventDefault();
    console.log(country.property("value"));
    var new_table = tableData.filter(UFOsighting => UFOsighting.country===counry.property("value"))
    displayData(new_table)
}

country.on("change", filtercountry)
filterbutton.on("click", filtercountry)

//shape
function filtershape(){
    d3.event.preventDefault();
    console.log(shape.property("value"));
    var new_table = tableData.filter(UFOsighting => UFOsighting.shape===shape.property("value"))
    displayData(new_table)
}

shape.on("change", filtershape)
filterbutton.on("click", filtershape)

