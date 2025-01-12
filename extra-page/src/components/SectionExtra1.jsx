import { Row, Col, Button } from "react-bootstrap";

const SectionExtra1 = function () {
  return (
    <Row>
      <Col xs={6} md={4}>
        <p className="text-muted">MEMBERSHIP & BILLING</p>
        <Button variant="secondary" size="lg" className="px-3 rounded-0">
          Cancel Membership
        </Button>
      </Col>
      <Col xs={6} md={4}>
        <p className="mb-1">
          <b>alessandro@incalza.com</b>
        </p>
        <p className="text-muted mb-1">Password: *******</p>
        <p className="text-muted">Phone: +39 334 3456564</p>
        <hr />
        <p>
          <span className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-paypal"
              viewBox="0 0 16 16"
            >
              <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z" />
            </svg>
          </span>
          <b>alessandro@incalza.com</b>
        </p>
      </Col>
      <Col xs={6} md={4}>
        <a className="d-block mb-2" href="javascript:void(0)">
          Change account email
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Change password
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Change phone number
        </a>
        <hr />
        <a className="d-block mb-2" href="javascript:void(0)">
          Update payment info
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Billing details
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Redeem giftcard or promo code
        </a>
        <a className="d-block mb-2" href="javascript:void(0)">
          Where to buy gift cards?
        </a>
      </Col>
    </Row>
  );
};
export default SectionExtra1;
