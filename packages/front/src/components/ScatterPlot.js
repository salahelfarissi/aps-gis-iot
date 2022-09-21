import React, { useState, useEffect } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-strict-dist-min';

const Plot = createPlotlyComponent(Plotly);

const ScatterPlot = () => {

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

  const primaryColor = '#0082de';
  const secondaryColor = '#005499';

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

  const { x, y } = transformData(measures);

  const data = [
    {
      x: x,
      y: y,
      mode: 'lines+markers',
      type: 'scatter',
      name: 'Displacement',
      marker: {
        color: secondaryColor,
        size: 5,
        opacity: 0.5,
      },
      line: {
        color: primaryColor,
      },
      hovertemplate: '<b>Displacement</b> %{y:.3f} m<extra></extra><br><b>Time</b> %{x}',
    },
  ]

  const layout = {
      title: {
        text: 'Displacement of rails',
        font: {
          family: 'Roboto, sans-serif',
          size: 18,
        },
        xref: 'paper',
        x: 0.05, 
      },
      font: {
        family: 'Open Sans, sans-serif',
      },
      showlegend: true,
      legend: {'orientation': 'h'},
      xaxis: {
        title: 'Time',
        type: 'date',
      },
      yaxis: {
        range: [0, 0.008],
      },
      hovermode: 'closest',
      hoverlabel: { bgcolor: primaryColor },
    }

  const config = {
    responsive: true,
    scrollZoom: true,
    displaylogo: false,
  }

  return (
    <Plot
      data={data}
      layout={layout}
      config={config}
      className="plot"
    />
  )
}

export default ScatterPlot;