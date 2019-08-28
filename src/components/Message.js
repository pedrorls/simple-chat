import React from "react";
import PropTypes from "prop-types";

export const Message = ({ message, author }) => (
  <p>
    <i>{author}</i>: {message}
  </p>
);

Message.propTypes = {
  dispatch: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};
