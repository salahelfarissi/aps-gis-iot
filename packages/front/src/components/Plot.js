import React, { useState, useEffect } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-strict-dist-min';

const Plot = createPlotlyComponent(Plotly);

const Graph = () => {
  const [data, setData] = useState([]);

  const getMeasures = async () => {
    try {
      const response = await fetch('http://localhost:5000/measures');
      const jsonData = await response.json();

      console.log(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getMeasures();
  })

  return (
    <Plot
      data={[
        {
          x: data,
          y: data,
          mode: 'lines',
          type: 'scatter',
          marker: { color: 'red' },
        },
      ]}
      layout={{ width: 600, height: 340, title: 'Displacement of rails' }}
    />
  )
}

export default Graph;