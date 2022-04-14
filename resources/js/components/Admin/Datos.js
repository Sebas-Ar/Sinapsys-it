import React, { Component } from 'react'
import { getProfile } from '../../loginRegister/loginRegister'
import './Datos.css'
import logo from '../../../img/logo/blanco.png'
import Logout from '../LoginRegister/Logout'
import { Link } from 'react-router-dom'

export default class Datos extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            pais: '',
            email: '',
            celuar: 0
        }

    }

    async componentDidMount() {
        const datos = await getProfile(localStorage.userMail)
        const { name, email, pais, celular } = datos.data.user[0]

        this.setState({
            name,
            email,
            pais,
            celular
        })
    }

    render() {
        return (
            <div className="Datos">
                <Logout />
                <header>
                    <div className="center">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <h1>DATOS DEL USUARIO</h1>
                </header>
                <div className="content">
                    <label>NOMBRE</label>
                    <p>{ this.state.name }</p>
                    <label>CELULAR</label>
                    <p>{this.state.celular}</p>
                    <label>PAIS</label>
                    <p>{ this.state.pais }</p>
                    <label>CORREO</label>
                    <p>{ this.state.email }</p>
                    <a href="http://mesadeayusa.sinapsys-it.com/" target="_blank" rel="noopener noreferrer">
                        <button>Ingresar</button>
                    </a>
                </div>
            </div>
        )
    }
}
