import React, { Component } from 'react'
import './Tarjeta.css'

export default class Tarjeta extends Component {
    render(props) {
        return (
            <div className="Tarjeta">
                <img src={this.props.img} alt=""/>
                <h3>{this.props.titulo}</h3>
                <p>{this.props.texto}</p>
            </div>
        )
    }
}
