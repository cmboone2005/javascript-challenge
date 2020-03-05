// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

data.forEach(function(UFOsighting) {
    console.log(UFOsighting);
    var row = tbody.append('tr');
    Object.entries(UFOsighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

//select the button and add functionality
var button = d3.select("#filter-btn");


button.on("click", function(){
    // select the input element
    var inputElement = d3.select(".form-control");
    // get input value
    var inputDate = inputElement.property("value");
    // filter data for the date value to get data that is searched for
    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputDate);

    // select the table body to insert table rows and cells
    var tbody = d3.select("tbody")
    // clean the table body to insert selected date values
    tbody.html("");

    // loop through filtered data to filtered table
    filteredData.forEach(function(UFOsighting){
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});