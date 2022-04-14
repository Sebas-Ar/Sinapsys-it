import React, { Component } from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

export default class Logo extends Component {
    render(props) {
        return ( <Link to="/">
            <img className="logo" src={this.props.img} alt="Logo"/>
        </Link>
        )
    }
}
