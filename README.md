# Project: Interactive Dashboard using D3.js (Belly Button Challenge)

## Description

This project creates an interactive web dashboard using D3.js to visualize data from [samples.json](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json). The application allows users to select an individual's sample from a dropdown menu, displaying their top 10 OTUs (Operational Taxonomic Units) in a horizontal bar chart and all OTUs in a bubble chart. Additionally, it presents the individual's demographic information in a panel. When a new sample is selected, all plots and the demographic information are updated dynamically.

The dashboard is deployed using GitHub Pages, making it easily accessible online.

## Features

- **Horizontal Bar Chart**: Displays the top 10 OTUs found in the selected sample.
  - Sample values are used as the bar chart values.
  - OTU IDs are used as the labels.
  - OTU labels are displayed as hover text.
  
- **Bubble Chart**: Displays all OTUs in the selected sample.
  - OTU IDs are plotted on the x-axis.
  - Sample values are plotted on the y-axis.
  - OTU IDs are used to color the markers.
  - Marker size is determined by the sample values.
  - OTU labels are shown when hovering over markers.

- **Metadata Display**: Shows demographic information for the selected individual.
  - Loops through the metadata JSON object and appends key-value pairs to the metadata panel.

- **Interactivity**: All plots and metadata dynamically update when a new sample is selected from the dropdown menu.

## Files and Structure

```bash
📁 Root Directory
│
├── 📄 index.html             # Main HTML file for the dashboard
├── 📄 app.js                 # JavaScript code for handling D3 and Plotly visualizations
├── 📄 style.css              # CSS file for styling the dashboard
└── 📄 README.md              # Documentation of the project (this file)
```

### Technologies Used
- **D3.js**: For data loading and manipulation.
- **Plotly.js**: For rendering the bar and bubble charts.
- **JavaScript (ES6)**: For dynamic data updates and DOM manipulation.
- **HTML/CSS**: For the layout and design of the dashboard.
- **GitHub Pages**: For deploying the app.

## How to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Open the HTML file**:

   Simply open `index.html` in your browser. Ensure that you have an internet connection, as the data is loaded from an external URL.

3. **Dropdown Menu**:

   Select a sample from the dropdown menu to see the bar chart, bubble chart, and metadata update dynamically.

## Detailed Instructions

1. **Load Data**:
   - Use the D3 library to read the dataset from the URL `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`.

2. **Horizontal Bar Chart**:
   - Use `sample_values` for the bar chart's x-values.
   - Use `otu_ids` for the y-values and labels.
   - Use `otu_labels` as hover text.

3. **Bubble Chart**:
   - Plot the OTU IDs on the x-axis and the sample values on the y-axis.
   - Use `otu_ids` to determine marker colors.
   - Use `sample_values` to set the marker sizes.
   - Set `otu_labels` as the hover text.

4. **Metadata Display**:
   - Extract metadata for the selected sample and display the demographic information by appending key-value pairs to the metadata panel.

5. **Interactivity**:
   - Ensure all charts and metadata update when a new sample is selected using the dropdown.

6. **Deploy**:
   - Deploy the app using GitHub Pages or any other free static hosting service.

Happy visualizing!
