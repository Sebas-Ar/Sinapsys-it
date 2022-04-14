import React, { Component } from 'react'
import './TituloAlterno.css'
import img1 from '../../../img/Grupo-958.png'

export default class TituloAlterno extends Component {
    render() {
        return (
            <div className="TituloAlterno">
                <div className="linea"></div>
                <h1 className="titulo1">SERVICIOS GESTIONADOS</h1>
                <h1 className="titulo2">SOC - NOC</h1>
                <p>Nuestro Centro de Operaciones de Seguridad (SOC) y Centro de Operaciones de Redes (NOC) basados en talento humano calificado, herramientas tecnológicas especializadas y alineados en estándares internacionales brinda servicios de monitoreo, mecanismos de prevención, detección y gestión de ataques cibernéticos garantizando la confidencialidad, disponibilidad e integridad de la información.</p>
                <img src={img1} alt=""/>
            </div>
        )
    }
}
