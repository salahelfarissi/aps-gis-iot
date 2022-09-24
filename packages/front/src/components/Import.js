import React, { useState } from "react";
import { Container, Row, Input, Label, FormGroup, Form, Button } from "reactstrap";

export default function Import() {
  const timestamp = new Date(Date.now()).toISOString(), displacement = Math.floor(Math.random() * 5) + 1;

  const [url, setUrl] = useState("http://localhost:8080/FROST-Server/v1.1/Datastreams(1)/Observations");
  const [data, setData] = useState(`${timestamp}, 0.00${displacement}`);

  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  const execute = () => {
    processData(url, data);
  };

  const processData = (url, data) => {
    const allLines = data.split(/\r\n|\n/);
    let lines = [];

    for (let i = 0; i < allLines.length; i++) {
      lines = allLines[i].split(",");
      if (lines.length === 2) {
          let observation = {
              phenomenonTime: lines[0].trim(),
              result: lines[1].trim()
          };
          post(url, JSON.stringify(observation));
      }
    }
  };

  const post = (url, data) => {
    const request = new XMLHttpRequest();
    request.addEventListener("load", function (e) {
        if (request.readyState === 4) {
            let p = document.createElement('p');
            p.style.color = request.status === 201 ? 'green' : 'red';
            p.style.fontSize = 'small';
            if (request.status >= 200 && request.status < 300) {
                const location = request.getResponseHeader('Location');
                p.innerText = 'Done: ' + location;
            } else {
                p.innerText = 'Error ' + request.status + ": " + request.responseText + "";
            }
            document.getElementById('result').appendChild(p);
        }
    });
    request.addEventListener("error", function (e) {
        let p = document.createElement('p');
        p.innerText = 'Error: ' + request.statusText;
        document.getElementById('result').appendChild(p);
    });
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(data);
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
      <div id="result" style={{ marginTop: 10 }}>
      </div>
    </Container>
  );
}
