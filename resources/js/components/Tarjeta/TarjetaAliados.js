import React, { Component } from 'react'
import './TarjetaAliados.css'

export default class TarjetaAliados extends Component {
    render(props) {
        return (
            <div className="TarjetaAliados">
                <img src={this.props.img} alt=""/>
            </div>
        )
    }
}
