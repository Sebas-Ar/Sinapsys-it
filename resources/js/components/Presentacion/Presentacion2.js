import React, { Component } from 'react'
import './Presentacion2.css'
import fondo from '../../../img/Trabaje-con-nosotros.png'

export default class Presentacion2 extends Component {
    render() {
        return (
            <div className="Presentacion2">
                <img src={fondo} alt="Imagen de Fondo, pesonas trabajando"/>
                <h1>
                    <span className="titulo1">TRABAJE CON</span>
                    <span className="titulo2">NOSOTROS</span>
                </h1>
                <div className="linea"></div>
                <p className="p1">Queremos sumar tus capacidades a nuestro equipo de trabajo.</p>
                <p className="p2">Queremos sumar tus capacidades a nuestro equipo de trabajo para entregar la mejorar experiencia de servicio a cada cliente.</p>
            </div>
        )
    }
}
