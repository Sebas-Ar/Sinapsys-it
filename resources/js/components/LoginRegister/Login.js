import React, { Component } from 'react'
import { login, getProfile } from '../../loginRegister/loginRegister'
import { withRouter, Link } from 'react-router-dom';
import logoNegro from '../../../img/logo-negro.png'
import mail from '../../../img/mail.png'
import block from '../../../img/padlock.png'
import './Login.css';
import Logo from '../Logo/Logo';

class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async onClick(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        const error = await login(user)

        if (error) {
            this.setState({
                errors: {
                    passworMail: 'Correo y/o contraseña incorrectos'
                }
            })
        }
               

        if (localStorage.usertoken) {

            localStorage.setItem('userMail', this.state.email)
            const datos = await getProfile(localStorage.userMail)

            if (datos.data.user[0].admin) {
                localStorage.setItem('admintoken', this.state.email)
                this.props.history.push('/admin')
            } else {
                
                this.props.history.push('/user')
            }

        }
    }
    
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="Login">
                <div className="fondo">
                    <h1>ZONA DE CLIENTES</h1>
                </div>
                <form>
                    <img className="cerebro" src={ logoNegro } alt="Logo"/>
                    <h1>INGRESA</h1>
                    <div className="input">
                        <img src={ mail } alt=""/>
                        <input type="email" onChange={this.onChange} name="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <img src={ block } alt=""/>
                        <input type="password" onChange={this.onChange} name="password" placeholder="contraseña" />
                    </div>
                    <button onClick={this.onClick}>INGRESAR</button>
                    {
                        this.state.errors = (this.state.errors.passworMail) 
                            ? <p className="error">{this.state.errors.passworMail}</p>
                            : <p></p>
                    }
                    <Link to="#" className="forgeth"></Link>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)