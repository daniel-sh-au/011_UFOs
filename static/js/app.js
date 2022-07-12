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