import React from "react";
// import { Button } from "reactstrap";
import PropTypes from "prop-types";

export default function ImportButton({
  onClick,
}) {
  return (
    <>
      <button onClick={onClick} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Execute
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Response</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="result">
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ImportButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};