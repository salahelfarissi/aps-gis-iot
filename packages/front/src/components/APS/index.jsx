import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <iframe
                width="100%"
                height="100%"
                allowFullScreen
                src="https://aps-bim-iot.herokuapp.com/"
                title="APS Viewer"
            ></iframe>
        );
    }
}

export default App;
