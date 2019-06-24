// from data.js
var tableData = data;

//Your code here

// select tbody using ds
tbody = d3.select("tbody")

// loop through data and add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(UFOsighting){
    var row = tbody.append("tr")
    Object.entries(UFOsighting).forEach(function([key, value]){
        var cell = row.append("td").text(value)	
    })
})}

displayData(tableData)

var datetime = d3.select("#datetime")
var filterbutton = d3.select("filter-btn")

// filter data 
function filterdate(){
    d3.event.preventDefault();
    console.log(datetime.property("value"));
    var new_table = tableData.filter(UFOsighting => UFOsighting.datetime===datetime.property("value"))
    displayData(new_table)
}

// event listener 
datetime.on("change", filterdate)
filterbutton.on("click", filterdate)
