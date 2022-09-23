import React, { useState } from "react";
import { Container, Row, Input, Label, FormGroup, Form, Button } from "reactstrap";

export default function Import() {
  const [url, setUrl] = useState("http://localhost:8080/FROST-Server/v1.1/Datastreams(1)/Observations");

  const execute = () => {
    console.log("execute");
  }

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
              onChange={e => setUrl(e.target.value)}
            />
            <Button color="warning" onClick={execute()}>
              Execute
            </Button>
          </FormGroup>
        </Form>
      </Row>
    </Container>
  );
}
