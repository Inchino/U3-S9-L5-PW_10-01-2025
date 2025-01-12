import { Row, Col } from "react-bootstrap";

const SectionExtra3 = function () {
  return (
    <Row>
      <Col xs={6} md={4}>
        <p className="text-muted">SETTINGS</p>
      </Col>
      <Col xs={6} md={4}>
        <a className="d-block mb-2" href="javascript:void(0)">
          Parent Controls
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Test Participation
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Manage download devices
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Activate a device
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Recent device streaming activity
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Signout all devices
        </a>
      </Col>
      <Col xs={6} md={4}></Col>
    </Row>
  );
};
export default SectionExtra3;
