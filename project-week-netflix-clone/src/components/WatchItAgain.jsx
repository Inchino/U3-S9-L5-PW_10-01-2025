import { Row, Col } from "react-bootstrap";

const WatchItAgain = function() {
    return(
        <>
        <h4>Watch It Again</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/7.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/8.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/9.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/10.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/11.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/12.png" alt="movie picture" />
          </Col>
        </Row>
        </>
    )
}

export default WatchItAgain;