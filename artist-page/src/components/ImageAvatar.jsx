import { Container, Image } from "react-bootstrap";

const ImageAvatar = function (){
    return (
    <Container fluid>
        <Image src="public/avatar.png" alt="avatar" height={100} className="mb-2"></Image>
      </Container>
      );
};
export default ImageAvatar;