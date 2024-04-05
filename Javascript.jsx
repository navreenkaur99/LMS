import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';

export default function Javascript() {
  const [activeModule, setActiveModule] = useState('module1');

  const handleNavLinkClick = (module) => {
    setActiveModule(module);
  };

  useEffect(() => {
    // This effect will run when the component mounts
    // and set the active module to 'module1' by default
    setActiveModule('module1');
  }, []);

  return (
    <Container fluid>
      <Row style={{ display: "flex" }}>
        <Col md={3} id="sidebar">
          <Nav className="flex-column">
            <NavLink href="#module1" onClick={() => handleNavLinkClick("module1")}>
              Module1
            </NavLink>
            <NavLink href="#module2" onClick={() => handleNavLinkClick("module2")}>
              Module2
            </NavLink>
            <NavLink href="#module3" onClick={() => handleNavLinkClick("module3")}>
              Module3
            </NavLink>
            <NavLink href="#module4" onClick={() => handleNavLinkClick("module4")}>
              Module4
            </NavLink>
          </Nav>
        </Col>

        <Col md={9} id="content">
          <h4>HTML CONTENT</h4>
          <div>
            {activeModule === "module1" && (
              <div style={{ width: '100%', height: '800px' }}>
                <iframe
                  title="PDF Viewer"
                  src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
                  width="100%"
                  height="100%"
                >
                  This browser does not support PDFs. Please download the PDF to view it.
                </iframe>
              </div>
            )}
            {activeModule === "module2" && <p>Content for Module2</p>}
            {activeModule === "module3" && <p>Content for Module3</p>}
            {activeModule === "module4" && <p>Content for Module4</p>}
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}
