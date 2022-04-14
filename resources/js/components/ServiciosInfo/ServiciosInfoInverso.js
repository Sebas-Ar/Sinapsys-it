import React, { Component } from 'react'
import './ServiciosInfoInverso.css'

export default class ServiciosInfoInverso extends Component {
    render(props) {
        return (
            <div className="ServiciosInfoInverso">
                <div>
                    <h3>{this.props.titulo}</h3>
                    <ul>
                        <li>{this.props.l1}</li>
                        <li>{this.props.l2}</li>
                    </ul>
                </div>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}