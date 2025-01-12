import { Container, Row, Col } from "react-bootstrap";
import SectionExtra1 from "./SectionExtra1";
import SectionExtra2 from "./SectionExtra2";
import SectionExtra3 from "./SectionExtra3";
import SectionExtra4 from "./SectionExtra4";

const ScheletroExtra = function () {
  return (
    <Container>
      <Row>
        <Col xs={2}></Col>
        <Col>
          <h1 className="mt-3">Account</h1>
          <hr />
          <Row>
            <SectionExtra1 />
            <hr />
          </Row>
          <Row>
            <SectionExtra2 />
            <hr />
          </Row>
          <Row>
            <SectionExtra3 />
            <hr />
          </Row>
          <Row>
            <SectionExtra4 />
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
};
export default ScheletroExtra;
