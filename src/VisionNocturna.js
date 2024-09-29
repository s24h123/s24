import React from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';

const VisionNocturna = ({ imageSrc, description, title, scrollToRegister }) => {
  return (
    <Container fluid className="my-3" style={{ height: 'auto', width: '99vw' }}>
      <Card 
        className="shadow-sm mx-0 wide-card" 
        style={{ 
          width: '100%',    
          height: '100%', 
          minHeight: '800px'
        }}
      >
        <Card.Body 
          className="d-flex align-items-center" 
          style={{ height: '100%' }}
        >
          <Row className="g-0 align-items-center w-100">
            {/* Columna para la descripción (Texto a la izquierda) */}
            <Col xs={12} md={6} className="text-center text-md-left">
              <Card.Title className="display-4">{title}</Card.Title> {/* Aumentar tamaño del título */}
              
              <Card.Text className="fs-4">{description}</Card.Text> {/* Aumentar tamaño de la descripción */}
              
              <Button 
                onClick={scrollToRegister} 
                className="btn btn-primary mt-4 fs-4" // Aumentar tamaño del botón
                style={{ padding: '10px 20px' }}
              >
                Ir al Registro
              </Button>
            </Col>
            
            {/* Columna para la imagen (Imagen a la derecha) */}
            <Col xs={12} md={6} className="text-center text-md-left">
              <img 
                src={imageSrc} 
                alt={title} 
                className="img-fluid" 
                style={{ 
                  height: 'auto', 
                  maxHeight: '60%', 
                  objectFit: 'cover', 
                  width: '98%' 
                }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VisionNocturna;
