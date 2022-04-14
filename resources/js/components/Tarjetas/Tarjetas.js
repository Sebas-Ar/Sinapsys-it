import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tarjetas.css';

export default class Tarjetas extends Component {
    render(props) {
        return (
            <Link to={this.props.url}>
                    <div className="Tarjetas">
                        <img src={this.props.icono} alt="Icono"></img>
                        <h3>{this.props.titulo}</h3>
                    </div>
            </Link>
        )
    }
}
