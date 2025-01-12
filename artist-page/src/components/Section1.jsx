import { Container, InputGroup, Form, Dropdown } from "react-bootstrap";

const Section1 = function () {
  return (
    <Container fluid>
      <InputGroup className="mb-3" data-bs-theme="dark">
        <InputGroup.Text id="basic-addon1">Edit</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <p className="mb-1 text-light">Language:</p>
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-light"
          id="dropdown-basic"
          className="rounded-0"
        >
          English
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
          <Dropdown.Item href="#/action-3">German</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};
export default Section1;
