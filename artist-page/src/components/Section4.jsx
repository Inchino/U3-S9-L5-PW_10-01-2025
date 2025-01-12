import { Container, Button} from "react-bootstrap";

const Section4 = function (){
    return (
    <Container fluid>
        <Button variant="outline-secondary" className="px-4 rounded-0 d-inline-block m-1"><b>SAVE</b></Button>
        <Button variant="outline-secondary" className="px-4 rounded-0 d-inline-block m-1"><b>CNCEL</b></Button>
        <Button variant="outline-secondary" className="px-4 rounded-0 d-inline-block m-1"><b>DELETE PROFILE</b></Button>
      </Container>
      );
};
export default Section4;