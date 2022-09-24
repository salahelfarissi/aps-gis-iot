import React from "react";
import { Container, Row, Input, Label, FormGroup, Form } from "reactstrap";
import Button from "./Button";
import PropTypes from "prop-types";
import { styles } from "./styles";

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
            <Label for="url" style={ styles.labelStyles }>
              URL
            </Label>
            <Input
              id="url"
              name="url"
              value={url}
              type="text"
              style={ styles.inputStyles }
              onChange={handleUrlChange}
            />
            <Button onClick={execute} description={description}/>
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <Input
          type="textarea"
          name="content"
          id="data"
          style={ styles.areaStyles }
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
