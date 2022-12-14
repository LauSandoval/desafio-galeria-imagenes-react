import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import React from 'react'; //
import Card from "react-bootstrap/Card";


function Producto (props) {
    return(
       <Card  style={{ width: '18rem' }} >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
      </Card.Body>
    </Card>
        );
}

export default Producto