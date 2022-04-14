import React, { Component } from 'react'
import './ServiciosInfo.css'

export default class ServiciosInfo4 extends Component {
    render(props) {
        return (
            <div className="ServiciosInfo">
                <img src={this.props.img} alt=""/>
                <div>
                    <h3>{this.props.titulo}</h3>
                    <ul>
                        <li>{this.props.l1}</li>
                        <li>{this.props.l2}</li>
                        <li>{this.props.l3}</li>
                        <li>{this.props.l4}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
