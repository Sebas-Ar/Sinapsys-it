import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './Logout.css'

class Logout extends Component {

    constructor(props){
        super(props)

        this.closeSesion = this.closeSesion.bind(this)
    }

    closeSesion() {
        if (localStorage.admintoken) {
            localStorage.removeItem('admintoken')
            localStorage.removeItem('usertoken')
            localStorage.removeItem('userMail')
            this.props.history.push('/')
        } else {
            localStorage.removeItem('usertoken')
            localStorage.removeItem('userMail')
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div className="Logout">
                <button onClick={ this.closeSesion }>Cerrar Sesión</button>
            </div>
        )
    }
}

export default withRouter(Logout)
