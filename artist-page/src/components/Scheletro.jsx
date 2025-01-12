import { Container, Row, Col } from "react-bootstrap";
import ImageAvatar from "./ImageAvatar";
import Section1 from "./Section1"
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Scheletro = function (){
    return (<Container>
        <Row>
          <Col xs={4} md={4}></Col>
          <Col>
          <h1 className="text-white">Edit Profile</h1>
          <hr className="text-white"/>
          <Row>
            <Col md={3}>
            <ImageAvatar/>
            </Col>
            <Col md={9}>
            <Section1/>
            <hr className="text-white"/>
            <Section2/>
            <hr className="text-white"/>
            <Section3/>
            <hr className="text-white"/>
            <Section4/>
            </Col>
          </Row>
          </Col>
          <Col xs={4} md={4}></Col>
        </Row>
      </Container>);
};
export default Scheletro;