import React, { useState } from "react";
import { Container, Col, Row, Button, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faCog,
  faRightFromBracket,
  faUser,
  faList,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function FloatingUI() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <Container
      className="foreground position-absolute vh-100 p-3 pe-none"
      fluid
    >
      <Row className="h-100 g-0">
        <Col className="col-12 col-md-7 col-lg-6 col-xl-5 text-start bg-white p-4 rounded-4 pe-auto">
          <Container className="d-flex p-0 justify-content-between">
            <h2>Nearby</h2>
            <Button variant="outline-dark" className="rounded-5 px-4">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Container>
        </Col>
        <Col className="d-none d-md-inline">
          <Row className="g-0 justify-content-end mb-2">
            <Button
              variant="dark"
              size="lg"
              className="rounded-circle pe-auto"
              onClick={handleShowMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </Row>
          <Row className="g-0 justify-content-end">
            <Button
              variant="dark"
              size="lg"
              className="rounded-circle pe-auto"
              onClick={() => {
                /* TODO: Implement route change */
              }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </Row>
        </Col>
      </Row>
      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            <FontAwesomeIcon icon={faUser} size="lg" /> Profile
          </p>
          <p>
            <FontAwesomeIcon icon={faList} size="lg" /> Order History
          </p>
          <p>
            <FontAwesomeIcon icon={faCog} size="lg" /> Settings
          </p>
          <p>
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" /> Log out
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default FloatingUI;
