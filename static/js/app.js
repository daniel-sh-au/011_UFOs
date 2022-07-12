// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create build table function
function buildTable(data) {
    // clear the existing data
    tbody.html("");
    
    // create forEach loop (similar to for loop)
    data.forEach((dataRow) => {
        // create variable to append a row(tr) to table body
        let row = tbody.append("tr");

        // create another forEach loop to append table data
        Object.values(dataRow).forEach((val) => {
            // create variable to append data to table
            let cell = row.append("td");
            // add values(val) to table cells(td)
            cell.text(val);
        });
    });
}

// create function to handle what to do when an input in given
function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check if date was entered
    if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}

// call handleClick function when filter button on html is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);