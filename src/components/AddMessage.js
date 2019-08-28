import React from "react";
import PropTypes from "prop-types";

export const AddMessage = props => {
  return (
    <section id="new-message">
      <input
        onKeyPress={(event, { value }) => {
          if (event.key === "Enter") {
            props.dispatch(value, "Me");
            value = "";
          }
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
};
