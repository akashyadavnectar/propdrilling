import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  
  return (
    <>
    <Container>
      <Row>
        <Col md={4}>
        <div className="heading mt-5">
                <h4 className="mb-3">Pain & Functional Description </h4>
                <p className="mt-3">
                  The description of the current situation gives your Optimum
                  Trainer a picture of and clues to the underlying causes of
                  your problems
                </p>
              </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;
