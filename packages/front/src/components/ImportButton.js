import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

export default function ImportButton({
  onClick,
}) {
  return (
    <Button onClick={onClick}>
      Import
    </Button>
  );
}

ImportButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};