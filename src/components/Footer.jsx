import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return  (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
    <h6>
    Copyright © 2018 - Hermosa Colección Fotográfica Canina año 2022 realizada por  Laura Sandoval

 <Badge bg="secondary">Galeria Imagenes 2022 </Badge>
    </h6>
         
     </div>
    );
 }; 
 export default Footer;