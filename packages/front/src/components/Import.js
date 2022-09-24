import React, { useState } from "react";
import { Container, Row, Input, Label, FormGroup, Form, Button } from "reactstrap";

export default function Import() {
  const [url, setUrl] = useState("http://localhost:8080/FROST-Server/v1.1/Datastreams(1)/Observations");
  const [data, setData] = useState("2019-03-14T10:07:00.000Z, 0.002");

  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  const execute = () => {
    processData(url, data);
  };

  const processData = (url, data) => {
    let allLines = data.split(/\r\n|\n/);
    console.log(allLines);

    for (let i = 0; i < allLines.length; i++) {
      setData(allLines[i].split(','));
      console.log(data.length);
      if (data.length === 2) {
          let observation = {
              phenomenonTime: data[0].trim(),
              result: data[1].trim()
          };
          post(url, JSON.stringify(observation));
      }
    }
  };

  const post = (url, data) => {
    console.log("Posting to " + url + " with data " + data);
  };

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
            <Button color="warning" onClick={() => execute()}>
              Execute
            </Button>
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
      <div id="result">
        <p>
          Importing to {url}.
        </p>
      </div>
    </Container>
  );
}
