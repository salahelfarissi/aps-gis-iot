import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-strict-dist-min';

const Plot = createPlotlyComponent(Plotly);

export const ScatterPlot = ({
  data,
  layout,
  config,
}) => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={config}
      className="plot"
    />
  )
}
