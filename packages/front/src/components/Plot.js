import React, { useState, useEffect } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-strict-dist-min';

const Plot = createPlotlyComponent(Plotly);

const Graph = () => {

  const [measures, setMeasures] = useState([]);

  const getMeasures = async () => {
    try {
      const response = await fetch('http://localhost:5000/measures');
      const jsonData = await response.json();

      setMeasures(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getMeasures();
  }, []);

  const transformData = (data) => {
    const x = [];
    const y = [];

    data.forEach((measure) => {
      x.push(measure.timestamp);
      y.push(measure.displacement);
    });

    return { x, y };
  }

  return (
    <Plot
      data={[
        {
          x: transformData(measures)['x'],
					y: transformData(measures)['y'],
          mode: 'lines',
          type: 'scatter',
          marker: { color: 'red' },
        },
      ]}
      layout={{ title: 'Displacement of rails' }}
      config={{ responsive: true }}
      className="plot"
    />
  )
}

export default Graph;