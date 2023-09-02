import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

function Container({ children, className }) {
  return (
    <div className={className}>
      <main>{children}</main>
    </div>
  );
}

Container.propTypes = {
  children : PropTypes.node,
  className : PropTypes.string
}

export default styled(Container)`
  margin: 0 auto 0;
  padding: 5em 0;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
