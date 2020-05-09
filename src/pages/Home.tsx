import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RouteButton = styled(Button)`
  margin: 10px;
`;

const Home: React.FC = () => {
  const history = useHistory();

  const changePage = (page: string) => {
    history.push(`/${page}`);
  };
  return (
    <>
      <h3 style={{textAlign: "center"}}>Welcome to home!!</h3>
      <ButtonContainer>
        <RouteButton size="sm" onClick={() => changePage("sample")}>
          Sample Page
        </RouteButton>
      </ButtonContainer>
    </>
  );
};

export default Home;
