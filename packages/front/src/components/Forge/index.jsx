import React, { Component } from 'react';
import ForgeViewer from 'react-forge-viewer';
 
class App extends Component {
 
  constructor(props){
    super(props);
 
    this.state = {
      view:null
    }
  }
 
  handleViewerError(error){
    console.log('Error loading viewer.');
  }
 
  /* after the viewer loads a document, we need to select which viewable to
  display in our component */
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
    let token = null;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:5000/api/forge/oauth/token', false);
    xhr.send(null);
    if (xhr.status === 200) {
      token = JSON.parse(xhr.responseText);
    }
    return token;
  }
 
  /* Once the viewer has initialized, it will ask us for a forge token so it can
  access the specified document. */
  handleTokenRequested(onAccessToken){
    console.log('Token requested by the viewer.');
    if(onAccessToken){
      let token = this.getForgeToken();
      console.log(token);
      if(token)
        onAccessToken(
          token.access_token, token.expires_in);
    }
  }
 
  render() {
    return (
      <div className="App">
        <ForgeViewer
          version="6.0"
          urn="dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dGZlLmJ1Y2tldC90dW5uZWwucnZ0"
          view={this.state.view}
          headless={false}
          onViewerError={this.handleViewerError.bind(this)}
          onTokenRequest={this.handleTokenRequested.bind(this)}
          onDocumentLoad={this.handleDocumentLoaded.bind(this)}
          onDocumentError={this.handleDocumentError.bind(this)}
          onModelLoad={this.handleModelLoaded.bind(this)}
          onModelError={this.handleModelError.bind(this)}
        />
      </div>
    );
  }
}
 
export default App;