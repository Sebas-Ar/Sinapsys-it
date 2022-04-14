import React, { Component } from 'react'
import './CuadriculaAliados.css'

import TarjetaAliados from '../Tarjeta/TarjetaAliados'

export default class CuadriculaAliados extends Component {
    render(props) {
        return (
            <div className="CuadriculaAliados">
                <div className="linea1 linea"></div>
                <div className="linea2 linea"></div>
                <div className="linea3 linea"></div>
                <TarjetaAliados className="tar1" img={this.props.img1} />
                <TarjetaAliados className="tar2" img={this.props.img2} />
                <TarjetaAliados className="tar3" img={this.props.img3} />
                <TarjetaAliados className="tar4" img={this.props.img4} />
                <TarjetaAliados className="tar5" img={this.props.img5} />
                <TarjetaAliados className="tar6" img={this.props.img6} />
                <TarjetaAliados className="tar7" img={this.props.img7} />
                <TarjetaAliados className="tar8" img={this.props.img8} />
                <TarjetaAliados className="tar9" img={this.props.img9} />
                <TarjetaAliados className="tar10" img={this.props.img10} />
                <TarjetaAliados className="tar11" img={this.props.img11} />
                <TarjetaAliados className="tar12" img={this.props.img12} />
            </div>
        )
    }
}
