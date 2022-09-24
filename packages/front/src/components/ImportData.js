import React from "react";
import { Container, Row, Input, Label, FormGroup, Form } from "reactstrap";
import ImportButton from "./ImportButton";

export default function ImportData({
  url,
  handleUrlChange,
  execute,
  handleDataChange,
  data,
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
            <ImportButton onClick={execute} />
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
      <div id="result" style={{ marginTop: 10 }}>
      </div>
    </Container>
  );
}
