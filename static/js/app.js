// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const filteredMetadata = metadata.find(entry => entry.id === sample);

    // Check the filteredMetadata
    console.log("Filtered Metadata:", filteredMetadata);

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Clear the existing dropdown options
    const demographicDropdown = d3.select("#demographicDropdown");
    demographicDropdown.html(""); // Clear the dropdown

    // Ensure that filteredMetadata is not undefined before proceeding
    if (filteredMetadata) {
      // Inside a loop, append new options for each key-value in the filtered metadata
      Object.entries(filteredMetadata).forEach(([key, value]) => {
        demographicDropdown.append("h4").text(`${key}: ${value}`).attr("value", key);
      });
    } else {
      console.log("No metadata found for the selected sample.");
    }
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samples = data.samples;

    // Filter the samples for the object with the desired sample number
    const filteredSample = samples.find(sampleObj => sampleObj.id === sample);


    // Get the otu_ids, otu_labels, and sample_values
    const otuIds = filteredSample.otu_ids;
    const otuLabels = filteredSample.otu_labels;
    const sampleValues = filteredSample.sample_values;

    // Build a Bubble Chart
    const bubbleTrace = {
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Earth'
      }
    };

    const bubbleLayout = {
      title: 'Bubble Chart of OTUs',
      xaxis: {title: 'OTU IDs'},
      yaxis: {title: 'Sample Values'},
      hovermodde: 'closest'
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', [bubbleTrace], bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const yticks = otuIds.slice(0, 10).map(id => `OTU ${id}`);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const barData = [{
      x: sampleValues.slice(0, 10).reverse(), // Get the top 10 sample values and reverse them
      y: yticks.reverse(), // Reverse the yticks to match the values
      type: 'bar',
      text: otuLabels.slice(0, 10).reverse(), // Get labels for the top 10 and reverse them
      orientation: 'h' // Horizontal bar chart orientation
    }];

    const barLayout = {
      title: 'Top 10 OTUs',
      xaxis: {title: 'Sample Values'},
      yaxis: {title: 'OTU IDs'}
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    const sampleNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    sampleNames.forEach((name) => {
      dropdown.append('option').text(name).property('value', name);
    });

    // Get the first sample from the list
    const firstSample = sampleNames[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
