import { Row, Col } from "react-bootstrap";

const NewReleases = function() {
    return(
        <>
        <h4>New Releases</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/13.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/14.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/15.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/16.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/17.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/18.png" alt="movie picture" />
          </Col>
        </Row>
        </>
    )
}

export default NewReleases;