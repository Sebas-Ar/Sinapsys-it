import React, { Component } from 'react'
import './TarjetaCasosExito.css'

export default class TarjetaCasosExito extends Component {
    render(props) {
        return (
            <div className="TarjetaCasosExito">
                <img src={this.props.img} alt=""/>
            </div>
        )
    }
}
