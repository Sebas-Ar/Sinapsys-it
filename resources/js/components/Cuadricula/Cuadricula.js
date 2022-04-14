import React, { Component } from 'react'
import './Cuadricula.css'

import img1 from '../../../img/025-programming@2x.png'
import img2 from '../../../img/026-server@2x.png'
import img3 from '../../../img/027-database-3@2x.png'
import img4 from '../../../img/028-storage@2x.png'
import img5 from '../../../img/029-transaction@2x.png'
import img6 from '../../../img/030-laptop@2x.png'

import Tarjeta from '../Tarjeta/Tarjeta'

export default class Cuadricula extends Component {
    render(props) {
        return (
            <div className="Cuadricula">
                <div className="linea1 linea"></div>
                <div className="linea2 linea"></div>
                <div className="linea3 linea"></div>
                <div className="linea4 linea"></div>
                <div className="linea5 linea"></div>
                <div className="linea6 linea"></div>
                <Tarjeta className="tar1" titulo={this.props.titulo1} img={img1} texto="" />
                <Tarjeta className="tar2" titulo={this.props.titulo2} img={img2} texto="" />
                <Tarjeta className="tar3" titulo={this.props.titulo3} img={img3} texto="" />
                <Tarjeta className="tar4" titulo={this.props.titulo4} img={img4} texto="" />
                <Tarjeta className="tar5" titulo={this.props.titulo5} img={img5} texto="" />
                <Tarjeta className="tar6" titulo={this.props.titulo6} img={img6} texto="" />
            </div>
        )
    }
}
