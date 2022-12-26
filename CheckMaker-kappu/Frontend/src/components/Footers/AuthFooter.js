import {  Nav, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <footer >
        {/* <Container> */}
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center  text-muted">
                © {new Date().getFullYear()}{" "}
               
                  Cognic
              
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
               
               
              </Nav>
            </Col>
          </Row>
        {/* </Container> */}
      </footer>
    </>
  );
};

export default Login;