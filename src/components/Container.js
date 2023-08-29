import React from "react";
import styled from "styled-components";

function Container({ children, className }) {
  return (
    <div className={className}>
      <main>{children}</main>
    </div>
  );
}

export default styled(Container)`
  margin: 0 auto 0;
  max-width: 1450px;
  padding: 5em 0;
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
