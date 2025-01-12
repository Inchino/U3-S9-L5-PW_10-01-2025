import { Row, Col, Container } from "react-bootstrap";

const SectionExtra4 = function () {
  return (
    <Row>
      <Col xs={6} md={4}>
        <p className="text-muted">MY PROFILE</p>
      </Col>
      <Col xs={6} md={4}>
        <Container fluid>
          <p>
            <span>
              <img src="public/avatar.png" alt="avatar" height="25" />
            </span>
            <b>Alessandro Incalza</b>
          </p>
        </Container>
        <a className="d-block mb-2" href="javascript:void(0)">
          Language
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Playback settings
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Subtitle appearence
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Viewing activity
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Ratings
        </a>
      </Col>
      <Col xs={6} md={4}>
        <a className="d-block mb-2 mt-5" href="javascript:void(0)">
          Manage profiles
        </a>
        <a className="d-block" href="javascript:void(0)">
          Add profile email
        </a>
      </Col>
    </Row>
  );
};
export default SectionExtra4;
