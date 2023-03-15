import { useState } from "react";
import styled from "styled-components";
import Weather from "./components/Weather";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Weather />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  background: #000046; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1cb5e0,
    #000046
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #245c81,
    #252548
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

export default App;
