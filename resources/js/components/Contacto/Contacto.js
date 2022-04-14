import React, { Component } from 'react'
import Axios from 'axios'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import './Contacto.css'

export default class Contacto extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            nombre: '',
            email: '',
            pais: '',
            celular: 0,
            mensaje: '',
            isVerified: false, 
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.close = this.close.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.state.isVerified) {
            if ((this.state.nombre !== '') && (this.state.email !== '') && (this.state.pais !== '') && (this.state.celular !== '') && (this.state.nombre !== 0) && (this.state.mensaje !== '')){
                let {errors, isVerified , ...data } = this.state
                await Axios.post('api/contact', data).then(res => {
                    console.log(res);
                });
                console.log(data);
                document.getElementById('message').style.animation = "enviado 1s forwards"
                console.log('Correo Enviado');
            }else {
                this.setState({
                    errors: {
                        err: 'Por favor rellene todos los campos'
                    }
                })
            }
        } else {
            alert('Nuestro sistema reCAPTCHA ha identificado comportamientos inusuales, por favor recargue la página para verificar')
        }
    }

    close() {
        document.getElementById('message').style.animation = "ocultarEnviado 1s forwards"
    }

    render() {
        return (
            <div className="Contacto">
                <div className="bloque" ></div>
                <h2>CONTÁCTENOS</h2>
                <form>
                    <h3>Escribanos, pronto lo contactaremos.</h3>
                    <label>Nombre</label>
                    <label>Email</label>
                    <input type="text" name="nombre" onChange={this.onChange} required/>
                    <input type="text" name="email" onChange={this.onChange} required/>
                    <label className="pais">Pais</label>
                    <label className="celular">Celular</label>
                    <input type="text" name="pais" onChange={this.onChange} required/>
                    <input type="number" name="celular" onChange={this.onChange} required/>
                    <label>Mensaje</label>
                    <textarea name="mensaje" cols="30" rows="10" onChange={this.onChange} required></textarea>
                    <button type="submit" onClick={this.handleSubmit}>Enviar</button>
                    {
                        this.state.errors = (this.state.errors.err)
                            ? <p className="error">{this.state.errors.err}</p>
                            :<p></p>
                    }
                    <div className="mensaje" id="message">
                        <i className="fas fa-times" onClick={this.close}></i>
                        <p>El correo ha sido enviado</p>
                    </div>
                    <GoogleReCaptchaProvider reCaptchaKey="6LeOA8oUAAAAABaUxGmH_E3mYrhgBhjxWUT_3jeI">
                        <GoogleReCaptcha onVerify={token => {
                            console.log(token);
                            this.setState({
                                isVerified: true
                            })
                        }} />
                    </GoogleReCaptchaProvider>
                </form>
                <div className="info">
                    <h3>Información de Contacto</h3>
                    <br/>
                    <p>Carrera 30 # 75 - 65 Oficina 311</p>
                    <p>Barrios Unidos - Bogotá - Colombia</p>
                    <br />
                    <p>Numero de whatsapp empresarial <br />+57 301 6784775</p>
                    <br />
                    <p>servicliente@sinapsys-it.com</p>
                </div>

            </div>
        )
    }
}
