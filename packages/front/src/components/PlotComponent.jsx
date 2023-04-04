import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const PlotComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const endpoint1 =
                'http://localhost:8080/FROST-Server/v1.1/Datastreams(1)/Observations';
            const endpoint2 =
                'http://localhost:8080/FROST-Server/v1.1/Datastreams(2)/Observations';

            // Make API calls to retrieve the time series data
            const response1 = await fetch(endpoint1);
            const response2 = await fetch(endpoint2);

            const jsonData1 = await response1.json();
            const jsonData2 = await response2.json();

            const measures1 = jsonData1.value;
            const measures2 = jsonData2.value;

            const x1 = [];
            const y1 = [];

            measures1.forEach((measure) => {
                x1.push(measure.phenomenonTime);
                y1.push(measure.result);
            });

            const data1 = {
                x: x1,
                y: y1,
                name: 'Prim 01',
            };

            const x2 = [];
            const y2 = [];

            measures2.forEach((measure) => {
                x2.push(measure.phenomenonTime);
                y2.push(measure.result);
            });

            const data2 = {
                x: x2,
                y: y2,
                name: 'Prim 02',
            };

            // Combine the data into a single array
            const combinedData = [data1, data2];

            // Update the state with the combined data
            setData(combinedData);
        };

        fetchData();
    }, []);

    return (
        <Plot
            data={data}
            layout={{
                title: 'Displacement of rails',
                xaxis: { title: 'phenomenonTime' },
                yaxis: { title: 'result' },
            }}
            config={{ responsive: true }}
        />
    );
};

export default PlotComponent;
