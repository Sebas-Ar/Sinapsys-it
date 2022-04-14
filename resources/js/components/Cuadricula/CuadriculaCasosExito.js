import React, { Component } from 'react'
import './CuadriculaCasosExito.css'

import TarjetaCasosExito from '../Tarjeta/TarjetaCasosExito'

export default class CuadriculaCasosExito extends Component {
    render(props) {
        return (
            <div className="CuadriculaCasosExito">
                <div className="linea1 linea"></div>
                <div className="linea2 linea"></div>
                <div className="linea3 linea"></div>
                <div className="linea4 linea"></div>
                <div className="linea5 linea"></div>
                <div className="linea6 linea"></div>
                <TarjetaCasosExito className="tar1" img={this.props.img1} />
                <TarjetaCasosExito className="tar2" img={this.props.img2} />
                <TarjetaCasosExito className="tar3" img={this.props.img3} />
                <TarjetaCasosExito className="tar4" img={this.props.img4} />
                <TarjetaCasosExito className="tar5" img={this.props.img5} />
                <TarjetaCasosExito className="tar6" img={this.props.img6} />
                <TarjetaCasosExito className="tar7" img={this.props.img7} />
                <TarjetaCasosExito className="tar8" img={this.props.img8} />
                <TarjetaCasosExito className="tar9" img={this.props.img9} />
                <TarjetaCasosExito className="tar10" img={this.props.img10} />
                <TarjetaCasosExito className="tar11" img={this.props.img11} />
                <TarjetaCasosExito className="tar12" img={this.props.img12} />
            </div>
        )
    }
}
