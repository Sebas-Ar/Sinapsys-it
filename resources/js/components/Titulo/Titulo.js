import React, { Component } from 'react'
import './Titulo.css'

export default class Titulo extends Component {
    render(props) {
        return (
            <div className="Titulo">
                <div className="linea"></div>
                <h2>{this.props.subtitulo}</h2>
                <h1 className="ali">{this.props.titulo1}</h1>
                <h1 className="est">{this.props.titulo2}</h1>
                <p>{this.props.texto}</p>
                <img src={this.props.img} alt=""/>
            </div>
        )
    }
}
