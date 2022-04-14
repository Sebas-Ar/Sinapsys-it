import React, { Component } from 'react'
import Axios from 'axios'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import './ContactoMap.css'

export default class ContactoMap extends Component {

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
        this.toggleBogota = this.toggleBogota.bind(this)
        this.toggleMedellin = this.toggleMedellin.bind(this)
        this.toggleCali = this.toggleCali.bind(this)
        this.toggleBarranquilla = this.toggleBarranquilla.bind(this)
        this.togglePeru = this.togglePeru.bind(this)
        this.toggleEcuador = this.toggleEcuador.bind(this)

    }
    toggleBogota() {
        document.getElementById('bogota').style.display = "inline"
        document.getElementById('medellin').style.display = "none"
        document.getElementById('cali').style.display = "none"
        document.getElementById('barranquilla').style.display = "none"
        document.getElementById('peru').style.display = "none"
        document.getElementById('ecuador').style.display = "none"
    }
    toggleMedellin() {
        document.getElementById('bogota').style.display = "none"
        document.getElementById('medellin').style.display = "inline"
        document.getElementById('cali').style.display = "none"
        document.getElementById('barranquilla').style.display = "none"
        document.getElementById('peru').style.display = "none"
        document.getElementById('ecuador').style.display = "none"
    }
    toggleCali() {
        document.getElementById('bogota').style.display = "none"
        document.getElementById('medellin').style.display = "none"
        document.getElementById('cali').style.display = "inline"
        document.getElementById('barranquilla').style.display = "none"
        document.getElementById('peru').style.display = "none"
        document.getElementById('ecuador').style.display = "none"
    }
    toggleBarranquilla() {
        document.getElementById('bogota').style.display = "none"
        document.getElementById('medellin').style.display = "none"
        document.getElementById('cali').style.display = "none"
        document.getElementById('barranquilla').style.display = "inline"
        document.getElementById('peru').style.display = "none"
        document.getElementById('ecuador').style.display = "none"
    }
    togglePeru() {
        document.getElementById('bogota').style.display = "none"
        document.getElementById('medellin').style.display = "none"
        document.getElementById('cali').style.display = "none"
        document.getElementById('barranquilla').style.display = "none"
        document.getElementById('ecuador').style.display = "inline"
        document.getElementById('peru').style.display = "none"
    }
    toggleEcuador() {
        document.getElementById('bogota').style.display = "none"
        document.getElementById('medellin').style.display = "none"
        document.getElementById('cali').style.display = "none"
        document.getElementById('barranquilla').style.display = "none"
        document.getElementById('ecuador').style.display = "none"
        document.getElementById('peru').style.display = "inline"
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.state.isVerified) {
            if ((this.state.nombre !== '') && (this.state.email !== '') && (this.state.pais !== '') && (this.state.celular !== '') && (this.state.nombre !== 0) && (this.state.mensaje !== '')) {
                let { errors, isVerified, ...data } = this.state
                await Axios.post('api/contact', data).then(res => {
                    console.log(res);
                });
                document.getElementById('message').style.animation = "enviado 1s forwards"
                console.log('Correo Enviado');
            } else {
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

    render(props) {
        return (
            <div className="ContactoMap">
                <h2>CONTÁCTENOS</h2>
                <p className="parrafo">Envienos su mensaje, pronto uno de nuestros asesores le brindará más información</p>
                <div className="form">
                    <form>
                        <h3>Escribanos, pronto lo contactaremos.</h3>
                        <label>Nombre</label>
                        <label>Email</label>
                        <input type="text" name="nombre" onChange={this.onChange} required />
                        <input type="text" name="email" onChange={this.onChange} required />
                        <label className="pais">Pais</label>
                        <label className="celular">Celular</label>
                        <input type="text" name="pais" onChange={this.onChange} required />
                        <input type="number" name="celular" onChange={this.onChange} required />
                        <label>Mensaje</label>
                        <textarea name="mensaje" cols="30" rows="10" onChange={this.onChange} required></textarea>
                        <button type="submit" onClick={this.handleSubmit}>Enviar</button>
                        {
                            this.state.errors = (this.state.errors.err)
                                ? <p className="error">{this.state.errors.err}</p>
                                : <p></p>
                        }
                        <GoogleReCaptchaProvider reCaptchaKey="6LeOA8oUAAAAABaUxGmH_E3mYrhgBhjxWUT_3jeI">
                            <GoogleReCaptcha onVerify={token => {
                                console.log(token);
                                this.setState({
                                    isVerified: true
                                })
                            }} />
                        </GoogleReCaptchaProvider>,
                    </form>
                        <div className="mensaje" id="message">
                            <i className="fas fa-times" onClick={this.close}></i>
                            <p>El correo ha sido enviado</p>
                        </div>
                    <div className="info">
                        <h3>Información de Contacto</h3>
                        <br />
                        <p>Carrera 30 # 75 - 65 Oficina 311</p>
                        <p>Barrios Unidos - Bogotá - Colombia</p>
                        <br />
                        <p>Numero de whatsapp empresarial <br />+57 301 6784775</p>
                        <br />
                        <p>servicliente@sinapsys-it.com</p>
                    </div>
                </div>
                <iframe className="uno" id="bogota" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.1427813173291!2d-74.07032293888099!3d4.670283808845018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af94a3d0905%3A0x5cd595ee3eeeb466!2zQWsgMzAgIzc1LTY1LCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1575573452588!5m2!1ses!2sco" width="100%" height="650" frameBorder="0" allowFullScreen=""></iframe>
                <iframe className="dos" id="medellin" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.105109804193!2d-75.57120528567395!3d6.249878628018686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428ff481d751b%3A0x952ee7d700b0713d!2sCl.%2050%20%23%2351-29%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1575573707558!5m2!1ses!2sco" width="100%" height="650" frameBorder="0" allowFullScreen=""></iframe> 
                <iframe className="tres" id="cali" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.7038407325144!2d-76.53290408567678!3d3.4221354523691603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6be652efb4b%3A0x58e4fadb7226b1f2!2sCra.%2036%20%2312c-23%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1575573765041!5m2!1ses!2sco" width="100%" height="650" frameBorder="0" allowFullScreen=""></iframe>
                <iframe className="cuatro" id="barranquilla" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5115656977046!2d-74.80396818565187!3d11.000192258032484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d9fd577fa6d%3A0x5c954ab0ce9ec15b!2sCra.%2055%20%2372-109%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1575573812875!5m2!1ses!2sco" width="100%" height="650" frameBorder="0" allowFullScreen=""></iframe>
                <iframe className="cinco" id="peru" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22831.945859515385!2d-78.4883238143255!3d-0.19880464969673045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a0d953a280f%3A0x1b222d7a30cc0c2a!2sAvenue%2012%20De%20Octubre%20%26%20Luis%20Cordero%2C%20Quito%20170143%2C%20Ecuador!5e0!3m2!1ses!2sco!4v1575574572473!5m2!1ses!2sco" width="100%" height="650" frameBorder="0" allowFullScreen=""></iframe>
                <iframe className="seis" id="ecuador" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2109484226944!2d-76.97486578555798!3d-12.097706346143136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7a4f64c9303%3A0x73c74957c17029b9!2sEl%20Derby%20254%2C%20Santiago%20de%20Surco%2015023%2C%20Per%C3%BA!5e0!3m2!1ses!2sco!4v1575574785627!5m2!1ses!2sco" width="100%" height="650" frameBorder="0" allowFullScreen=""></iframe>
                <div className="botones">
                    <ul>Colombia
                        <li onClick={this.toggleBogota}>Bogotá</li>
                        <li onClick={this.toggleMedellin}>Medellin</li>
                        <li onClick={this.toggleCali}>Cali</li>
                        <li onClick={this.toggleBarranquilla}>Barranquilla</li>
                    </ul>
                    <button onClick={this.togglePeru}>Perú</button>
                    <button onClick={this.toggleEcuador}>Ecuador</button>
                </div>
            </div>
        )
    }
}
