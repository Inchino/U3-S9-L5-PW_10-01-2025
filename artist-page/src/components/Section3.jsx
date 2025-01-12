import { Container, Form } from "react-bootstrap";

const Section3 = function () {
  return (
    <Container fluid>
      <p className="mb-1 text-light">Autoplay controls</p>
      <Container fluid>
        <p className="text-light">
          <span>
            <Form.Check aria-label="option 1" />
          </span>
          Autoplay next episode in a series on all devices.
        </p>
      </Container>
      <Container fluid>
        <p className="text-light">
          <span>
            <Form.Check aria-label="option 1" />
          </span>
          Autoplay previews while browsing on all devices.
        </p>
      </Container>
    </Container>
  );
};
export default Section3;
