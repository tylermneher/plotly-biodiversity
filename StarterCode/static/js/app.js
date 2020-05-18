// 1. D3 json import
d3.json("samples.json", function (data) {
  console.log(data);
});

// 2. Horizonatal Bar Chart

var trace1 = [{
    type: 'bar',
    x: 'sample_values',
    orientation: 'h'
}];

Plotly.newPlot('bar', trace1);

// 3. Bubble Chart
var traceBubble = {
  x: 'otu_ids',
  y: 'sample_values',
  mode: 'markers'
}
// 4. Display sample metadata

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// 6. Update all of the plots any time that a new sample is selected.