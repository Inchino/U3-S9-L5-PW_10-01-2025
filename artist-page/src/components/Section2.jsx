import { Container, Button } from "react-bootstrap";

const Section2 = function () {
  return (
    <Container fluid>
      <p className="text-light">Maturity Settings:</p>
      <p className="bg-secondary d-inline-block p-1 px-2">
        <small>
          <b className="text-white">ALL MATURITY RATINGS</b>
        </small>
      </p>
      <p>
        <small className="text-white">
          Show titles of <b>all maturity ratings</b> for this profile
        </small>
      </p>
      <Button variant="outline-secondary" className="px-4 rounded-0">
        <b>EDIT</b>
      </Button>
    </Container>
  );
};
export default Section2;
