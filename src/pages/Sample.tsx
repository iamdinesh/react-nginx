import React, {useState, useContext} from "react";
import styled from "styled-components";
import api from "../api";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import AuthContext from "../contexts/AuthContext";

const Container = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

const sleep = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [alert, showAlert] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const context = useContext(AuthContext);

  const getData = async () => {
    try {
      showAlert("");
      setLoading(true);
      await sleep(1000);
      const {data} = await api.get("/api/test");
      setMessage(data);
    } catch (err) {
      showAlert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <p>Hello World !!!!</p>
      </Container>

      <Container>
        <div>{context.isLoggedIn ? context.userName : ""}</div>
      </Container>
      {isLoading ? (
        <Container>Loading Results</Container>
      ) : message ? (
        <Container>{message}</Container>
      ) : null}
      {alert ? (
        <Alert variant="danger" dismissible onClose={() => showAlert("")}>
          {alert}
        </Alert>
      ) : null}
      <Container>
        <Button onClick={() => getData()}>Get Data</Button>
      </Container>
    </>
  );
};

export default App;
