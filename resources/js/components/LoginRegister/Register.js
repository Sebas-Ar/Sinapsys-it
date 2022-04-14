import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { register } from '../../loginRegister/loginRegister'
import fondo from '../../../img/technology.png'
import logoNegro from '../../../img/logo-negro.png'
import mail from '../../../img/mail.png'
import block from '../../../img/padlock.png'
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            pais: '',
            celular: 0,
            email: '',
            password: '',
            errors: {}
        }

        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async onClick(e) {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            pais: this.state.pais,
            celular: this.state.celular,
            email: this.state.email,
            password: this.state.password
        }
        const error = await register(newUser)
        if ( error ) {
            this.setState({
                errors: {
                    err: 'Rellene todos los campos'
                }
            })
        }else {
            this.props.history.push('/login')
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="Register">
                <img className="fondo" src={fondo} alt="fondo" />
                <form>
                    <img className="cerebro" src={logoNegro} alt="Logo" />
                    <h1>REGISTRARSE</h1>
                    <div className="input">
                        <input type="text" onChange={this.onChange} name="name" placeholder="Nombre" />
                    </div>
                    <div className="input">
                        <input type="text" onChange={this.onChange} name="pais" placeholder="Pais" />
                    </div>
                    <div className="input">
                        <input type="number" onChange={this.onChange} name="celular" placeholder="Celular" />
                    </div>
                    <div className="input">
                        <input type="email" onChange={this.onChange} name="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <input type="password" onChange={this.onChange} name="password" placeholder="contraseña" />
                    </div>
                    <button onClick={this.onClick}>Registrar</button>
                    {
                        this.state.errors = (this.state.errors.err)
                            ? <p className="error">{ this.state.errors.err }</p>
                            : <p></p>
                    }
                </form>
            </div>
        )
    }
}

export default withRouter(Register)