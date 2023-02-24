// React //
import React from 'react';

// Bootstrap //
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Css//
import './index.css';

const CursesSection = () => {
  return (
    <>
      <div className="containerCurses">
        <Row>
          <Col xs={12}>
            <h3 className="titleCursesSection">Cursos Ministrados</h3>
          </Col>
          <Row className="rowCursesSection">
            {/* Card Reiki*/}
            <Card className="cardCursesSection" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Cursos em Reiki</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
                <Button variant="secondary">Conheça nossos cursos</Button>
              </Card.Body>
            </Card>
            {/* Card Terapias*/}
            <Card className="cardCursesSection" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Cursos em Terapias</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
                <Button variant="secondary">Conheça nossos cursos</Button>
              </Card.Body>
            </Card>
            {/* Card Energias*/}
            <Card className="cardCursesSection" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Cursos em Energias</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
                <Button variant="secondary">Conheça nossos cursos</Button>
              </Card.Body>
            </Card>
            {/* Card Oraculares */}
            <Card className="cardCursesSection" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Cursos Oraculares</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
                <Button variant="secondary">Conheça nossos cursos</Button>
              </Card.Body>
            </Card>
          </Row>
          <Row className="rowCursesSection">
            {/* Card Magias */}
            <Card className="cardCursesSection" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Cursos em Magias</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
                <Button variant="secondary">Conheça nossos cursos</Button>
              </Card.Body>
            </Card>
            {/* Card Workshops */}
            <Card className="cardCursesSection" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Workshops</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
                <Button variant="secondary">Conheça nossos cursos</Button>
              </Card.Body>
            </Card>
            {/* Card Oficinas */}
            <Card className="cardCursesSection" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Oficinas</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
                <Button variant="secondary">Conheça nossos cursos</Button>
              </Card.Body>
            </Card>
          </Row>
        </Row>
      </div>
    </>
  );
};

export default CursesSection;
