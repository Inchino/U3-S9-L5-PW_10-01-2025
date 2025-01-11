import { Row, Col } from "react-bootstrap";

const TrendingNow = function() {
    return(
        <>
        <h4>Trending Now</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/2.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/3.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/4.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/5.png" alt="movie picture" />
          </Col>
          <Col className="col mb-2 text-center px-1">
            <img className="img-fluid" src="assets/6.png" alt="movie picture" />
          </Col>
        </Row>
        </>
    )
}

export default TrendingNow;