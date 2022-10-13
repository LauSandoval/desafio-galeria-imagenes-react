import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import React from 'react'; //
import Producto from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="Header">
    <Header title="Galeria de Imagenes con React"/>
    <Container>
    <Row className="justify-content-md-center">
      <Col md="auto">
      <Producto name="Tommy Fotográfo" desc="Nuestro hermoso canino posa sobre la camara fotografica demostrando que es uno de los favoritos de la galeria." img="https://placedog.net/751"/>
      </Col>
    </Row>
    <br></br>
    <Row className="justify-content-md-center">
    <Col md="auto">
    <Producto name="El Duo Dinámico" desc="Balto y Toto lucen geniales en su postal despues de disfrutar de un divertido día en el lago." img="https://placedog.net/752"/>
    </Col>
    </Row>
    <br></br>
    <Row className="justify-content-md-center">
    <Col md="auto">
    <Producto name="El King Dalmata" desc="Nuestro eterno cachorro dalmata no esta interesado en madurar, siempre encuentra como generar caos en su hogar." img="https://placedog.net/753"/>
    </Col>
    </Row>
    <br></br>
    </Container>
    <Footer contenido="Mas Información"/>
     </div>
  );
}

export default App;
