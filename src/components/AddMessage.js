import React from "react";
import PropTypes from "prop-types";

export const AddMessage = props => {
  return (
    <section id="new-message">
      <input
        onKeyPress={event => {
          if (event.key === "Enter") {
            props.dispatch(event.target.value, "Me");
            event.target.value = "";
          }
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
};
