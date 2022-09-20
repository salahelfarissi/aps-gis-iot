import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-strict-dist-min';

const Plot = createPlotlyComponent(Plotly);

const Graph = () => (
  <Plot
    data={[
      {
        x: ['2022-05-19 00:06:56', '2022-05-19 00:07:55', '2022-05-19 00:08:57'],
        y: [0.003, 0.004, 0.005],
        type: 'scatter',
      },
    ]}
    layout={ {width: 600, height: 340, title: 'Displacement of rails'} }
  />
)

export default Graph;