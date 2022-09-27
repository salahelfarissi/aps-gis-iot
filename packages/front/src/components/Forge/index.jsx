import React from 'react';
import ForgeViewer from 'forge-viewer-react';

class Forge extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      view:null
    }
  }

  handleViewerError(error){
    console.log('Error loading viewer.');
  }

  handleDocumentLoaded(doc, viewables){
    if (viewables.length === 0) {
      console.error('Document contains no viewables.');
    }
    else{
      //Select the first viewable in the list to use in our viewer component
      this.setState({view:viewables[0]});
    }
  }

  handleDocumentError(viewer, error){
    console.log('Error loading a document');
  }
 
  handleModelLoaded(viewer, model){
    console.log('Loaded model:', model);
  }
 
  handleModelError(viewer, error){
    console.log('Error loading the model.');
  }

  getForgeToken(){
    return fetch('http://localhost:3000/api/forge/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&grant_type=client_credentials&scope=data:read'
    }).then(res => res.json())
    .then(res => res.access_token)
    .catch(err => console.log(err));
  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

export default Forge;