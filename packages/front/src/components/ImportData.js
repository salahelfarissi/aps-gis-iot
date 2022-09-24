import React from "react";
import { Container, Row, Input, Label, FormGroup, Form } from "reactstrap";
import ImportButton from "./ImportButton";
import PropTypes from "prop-types";

export default function ImportData({
  url,
  handleUrlChange,
  execute,
  handleDataChange,
  data,
  description
}) {
  
  return (
    <Container className="mt-3">
      <Row>
        <h1>Observation Importer</h1>
        <p>Paste some <b>CSV</b> with two columns in the box.<br></br> The first column must be the <b>timestamp</b>. The second column must be the <b>measure</b>.</p>
      </Row>
      <Row>
        <Form>
          <FormGroup className="input-group mb-3">
            <Label for="url" style={{ fontFamily: 'Open Sans, sans-serif', fontStyle: 'italic', marginLeft: 5, marginRight: 7, paddingTop: 7 }}>
              URL
            </Label>
            <Input
              id="url"
              name="url"
              value={url}
              type="text"
              style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 13 }}
              onChange={handleUrlChange}
            />
            <ImportButton onClick={execute} description={description}/>
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <Input
          type="textarea"
          name="content"
          id="data"
          style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 13, height: 300 }}
          onChange={handleDataChange}
          value={data}
        />
      </Row>
    </Container>
  );
}

ImportData.propTypes = {
  url: PropTypes.string.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
  execute: PropTypes.func.isRequired,
  handleDataChange: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
