import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormularioContrate from './FormularioContrate'; // Asegúrate de importar tu componente de formulario
import styles from './Contrate.module.css'; // Importa los estilos

const Contrate = ({ title, description, phone, imageSrc }) => {
  return (
    <Container fluid className="my-5">
      <Row className="align-items-center g-0">
        {/* Sección de texto a la izquierda */}
        <Col md={6} className={`p-5 ${styles['full-width-text']}`}> {/* Agrega la clase del módulo aquí */}
          <h2 className="display-1">{title}</h2>
          <p className="lead">{description}</p>
          <p className={`fs-5 ${styles['fs-5']}`}>
  En S24 Seguridad Electrónica, tratamos cada solicitud con total discreción y profesionalismo. Sabemos lo importante que es tu seguridad, por eso queremos brindarte una solución personalizada adaptada a tus necesidades. No esperes más, rellena el formulario y nuestro equipo te asesorará en breve, garantizando un servicio confiable y seguro desde el primer contacto.
</p>


          {/* Aquí inserto el componente FormularioContrate */}
          <FormularioContrate />
        </Col>

        {/* Sección de imagen a la derecha */}
        <Col md={6} className="p-0">
          <img 
            src={imageSrc} 
            alt="Sistemas de seguridad" 
            className={`img-fluid ${styles['img-fluid']}`} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contrate;
