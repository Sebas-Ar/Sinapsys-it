import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BarraNavDeslizable.css';
import facebook from '../../../img/facebook-logo@2x.png'
import instagram from '../../../img/instagram@2x.png'
import twitter from '../../../img/twitter-logo@2x.png'
import linkedin from '../../../img/linkedin.svg';
import menu from '../../../img/menu.png'

export default class BarraNavDeslizable extends Component {
    constructor(props){
        super(props)

        this.state = {
            activacion: false
        }

        this.toggle = this.toggle.bind(this)
    }


    toggle() {
        var animate = "";
        this.setState({
            activacion: !this.state.activacion
        });
        this.state.activacion ? animate = "desplegar .5s forwards" : animate = "ocultar .5s forwards";
        document.getElementById('change').style.animation = animate;
        document.getElementById('darkness').style.animation = animate;
    }
 
    render() {
        return (
            <div className="BarraNavDeslizable">
                <div id="darkness" className="pantalla" onClick={this.toggle}></div>
                <Link to="#" title="Menú">
                    <button className="activar" onClick={this.toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <img src={menu} alt="boton de menú"/>
                    </button>
                </Link>
                
                <nav id="change">
                    <button className="cerrar" onClick={this.toggle}><i className="fas fa-times"></i></button>
                    <ul>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/">INICIO</Link></li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/nosotros">NOSOTROS</Link></li>
                        <li className="lista"><div className="punto"></div><Link to="#">SERVICIOS</Link>
                            <ul className="lista">
                                <li><Link onClick={this.toggle} to="/servicios/integracion-de-tecnologias">INTREGRACIÓN DE TECNOLOGÍAS</Link></li>
                                <li><Link onClick={this.toggle} to="/servicios/seguridad-informatica">SEGURIDAD INFORMÁTICA</Link></li>
                                <li><Link onClick={this.toggle} to="/servicios/servidores">SERVIDORES</Link></li>
                                <li><Link onClick={this.toggle} to="/servicios/servicios-gestionados">SOC - NOC</Link></li>
                                <li><Link onClick={this.toggle} to="/servicios/soluciones-en-redes">SOLUCIONES EN REDES</Link></li>
                                <li><Link onClick={this.toggle} to="/servicios/servicios-profesionales">SERVICIOS PROFESIONALES</Link></li>
                            </ul>
                        </li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/trabaje-con-nosotros">TRABAJE CON NOSOTROS</Link></li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/aliados-estrategicos">ALIADOS ESTRATÉGICOS</Link></li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/casos-de-exito">CASOS DE ÉXITO</Link></li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/login">ZONA DE CLIENTES</Link></li>
                        <li><div className="punto"></div><a onClick={this.toggle} href="http://blog.sinapsys-it.com/" target="_blank" rel="noopener noreferrer">BLOG</a></li>
                        <li><div className="puntoCerrar"></div><Link onClick={this.toggle} to="/contactenos">CONTACTO</Link></li>
                    </ul>

                    <div className="socialDeslizable">
                        <a href="https://www.linkedin.com/company/sinapsys-it/?viewAsMember=true" rel="noopener noreferrer" target="_blank"><img src={ linkedin } alt=""/></a>
                        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><img src={ facebook } alt="Logo Facebook"/></a>
                        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><img src={ instagram } alt=""/></a>
                        <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><img src={ twitter } alt=""/></a>
                    </div>
                </nav>
                
            </div>
            
        )
    }
}
