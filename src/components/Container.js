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
  max-width: 1200px;
  margin: 0 auto 0;
  padding: 5em 0;
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
