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

function filterData(data, field, compare) {
    if(compare !== "") {
        return data.filter(function(UFOsighting) {
            if (UFOsighting[field] === compare) {
                return true;
            }
        });
    }
    return data;
};

// create an event for button click
button.on("click", function(){
    // select the input element for date and get the html node
    var dateElement = d3.select("#datetime");
    // get the value property of the input element
    var inputDate = dateElement.property("value");
    
    // select the input element for city and get the value info
    var cityElement = d3.select('#city');
    var inputCity = cityElement.property("value");
    inputCity = inputCity.toLowerCase();

    // select the input element for state and get the value info
    var stateElement = d3.select("#state");
    var inputState = stateElement.property("value");
    inputState = inputState.toLowerCase();

    // select the input element for country and get the value info
    var countryElement = d3.select("#country");
    var inputCountry = countryElement.property("value");
    inputCountry = inputCountry.toLowerCase();

    //select the input element for shape and get the value info
    var shapeElement = d3.select("#shape");
    var inputShape = shapeElement.property("value");
    inputShape = inputShape.toLowerCase();

    // create a variable for filtered data
    var filteredData = tableData;


    // use filterData function to filter data for the search criterias
    filteredData = filterData(filteredData, 'datetime', inputDate);
    filteredData = filterData(filteredData, 'city', inputCity);
    filteredData = filterData(filteredData, 'state', inputState);
    filteredData = filterData(filteredData, 'country', inputCountry);
    filteredData = filterData(filteredData, 'shape', inputShape);

    // console.log(filteredData);

    // select the table body to insert table rows and cells
    var tbody = d3.select("tbody")
    // clean the table body to insert selected date values
    tbody.html("");

    // loop through filtered data to insert rows and cells for each object
    filteredData.forEach(function(UFOsighting){
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});
