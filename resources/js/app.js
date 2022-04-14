require('./bootstrap')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Favicon from 'react-favicon';

//Components
import BarraNavDeslizable from "./components/BarraNavDeslizable/BarraNavDeslizable"
import Whatsapp from './components/Whatsapp/Whatsapp';
import Logo from './components/Logo/Logo'
import Inicio from './components/Inicio/Inicio'
import PopUp from './components/PopUp/PopUp'
import Tarjetas from './components/Tarjetas/Tarjetas'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import Presentacion from './components/Presentacion/Presentacion'
import Imagenes from './components/Imagenes/Imagenes'
import MisionVision from './components/MisionVision/MisionVision'
import ContactoMap from './components/Contacto/ContactoMap'
import Titulo from './components/Titulo/Titulo'
import Cuadricula from './components/Cuadricula/Cuadricula'
import TituloAlterno from './components/Titulo/TituloAlterno'
import ServiciosInfo from './components/ServiciosInfo/ServiciosInfo'
import ServiciosInfo4 from './components/ServiciosInfo/ServiciosInfo4'
import ServiciosInfoInverso from './components/ServiciosInfo/ServiciosInfoInverso'
import Contactenos from './components/Contacto/Contactenos'
import Presentacion2 from './components/Presentacion/Presentacion2'
import ContactoInfo from './components/Contacto/ContactoInfo'
import Contact from './components/BotonContact/Contact'
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register'
import Datos from './components/Admin/Datos';
import OfertaLaboral from './components/Admin/OfertaLaboral';
import OfertaLab from './components/OfertaLab/OfertaLab';
import CuadriculaCasosExito  from './components/Cuadricula/CuadriculaCasosExito';
import CuadriculaAliados from './components/Cuadricula/CuadriculaAliados';

//Img
import logoBlanco from '../img/logo/blanco.png'
import logoNegro from '../img/logo/negro.png'
import icon1 from '../img/001-analytical@2x.png'
import icon2 from '../img/candado.png'
import icon3 from '../img/001-analytical@2x.png'
import icon4 from '../img/004-filter@2x.png'
import imgTitulo1 from '../img/Grupo-1324.png'
import imgTitulo2 from '../img/Grupo-1323.png'
import imgTitulo3 from '../img/Grupo-866.png'
import imgTitulo4 from '../img/Grupo-433.png'
import imgTitulo5 from '../img/Grupo-849.png'
import imgTitulo6 from '../img/Grupo-506.png'
import imgTitulo7 from '../img/Grupo-1322.png'
import img1 from '../img/Grupo-1325.png'
import img2 from '../img/Grupo-1116.png'
import img3 from '../img/Grupo-1146.png'
import ExitoAruba from '../img/CasosExito/ExitoAruba.jpg'
import ExitoBit from '../img/CasosExito/ExitoBit.jpg'
import ExitoCisco from '../img/CasosExito/ExitoCisco.jpg'
import ExitoDell from '../img/CasosExito/ExitoDell.jpg'
import ExitoEset from '../img/CasosExito/ExitoEset.jpg'
import ExitoHp from '../img/CasosExito/ExitoHp.jpg'
import ExitoMicrosoft from '../img/CasosExito/ExitoMicrosoft.jpg'
import ExitoPanasonic from '../img/CasosExito/ExitoPanasonic.jpg'
import ExitoRedHad from '../img/CasosExito/ExitoRedHad.jpg'
import ExitoUbiquiti from '../img/CasosExito/ExitoUbiquiti.jpg'
import ExitoVeritas from '../img/CasosExito/ExitoVeritas.jpg'
import ExitoVmware from '../img/CasosExito/ExitoVmware.jpg'
import AliadosAccion from '../img/aliados/AliadosAccion.jpg'
import AliadosApiros from '../img/aliados/AliadosApiros.jpg'
import AliadosCom from '../img/aliados/AliadosCom.jpg'
import AliadosCooperativa from '../img/aliados/AliadosCooperativa.jpg'
import AliadosGrupo from '../img/aliados/AliadosGrupo.jpg'
import AliadosServilla from '../img/aliados/AliadosServilla.jpg'
import Aliados1 from '../img/aliados/Aliados1.png'
import Aliados2 from '../img/aliados/Aliados2.png'
import Aliados3 from '../img/aliados/Aliados3.png'
import Aliados4 from '../img/aliados/Aliados4.png'
import Aliados5 from '../img/aliados/Aliados5.png'
import Aliados6 from '../img/aliados/Aliados6.png'
import icono from '-!file-loader!../img/favicon.ico'

//Video
import video from '-!file-loader!../img/Ojala-3.mp4'

//Styles
import '../css/app.css'

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            PopUp: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        document.getElementById('PopUp').style.animation = "cerrar 1s forwards";
        this.setState({
            PopUp: true
        })
    }

    render() {
        return (
            <Router>
                    <Route path="/servicios" render={() => {
                        return <div>
                            <BarraNavDeslizable />
                            <Contact />
                            <Whatsapp />
                        </div>
                    }} />

                <Switch>
                    
                    <Route path="/" exact render={() => {
                        //sin PopUp
                        if(this.state.PopUp){
                            return <div className="inicio">
                                <Logo img={logoBlanco} />
                                <Inicio />
                                <div className="content">
                                    <Tarjetas url="/servicios/servicios-gestionados" titulo="SOC-NOC" icono={icon1} />
                                    <Tarjetas url="/servicios/seguridad-informatica" titulo="SEGURIDAD INFORMATICA" icono={icon2} />
                                    <Tarjetas url="/servicios/integracion-de-tecnologias" titulo="INFRAESTRUCTURA TECNOLOGICA" icono={icon3} />
                                    <Tarjetas url="/servicios/soluciones-en-redes" titulo="ADMINISTRACION IT" icono={icon4} />
                                </div>
                                <Contacto />
                                <BarraNavDeslizable />
                                <Contact />
                                <Whatsapp />
                                <Footer />
                            </div>
                        }else {
                            return <div className="inicio">
                                <Logo img={logoBlanco} />
                                <PopUp video={video} onClik={this.toggle} />
                                <Inicio />
                                <div className="content">
                                    <Tarjetas url="/servicios/servicios-gestionados" titulo="SOC-NOC" icono={icon1} />
                                    <Tarjetas url="/servicios/seguridad-informatica" titulo="SEGURIDAD INFORMATICA" icono={icon2} />
                                    <Tarjetas url="/servicios/integracion-de-tecnologias" titulo="INFRAESTRUCTURA TECNOLOGICA" icono={icon3} />
                                    <Tarjetas url="/servicios/soluciones-en-redes" titulo="ADMINISTRACION IT" icono={icon4} />
                                </div>
                                <Contacto />
                                <BarraNavDeslizable />
                                <Contact />
                                <Whatsapp />
                                < Footer />
                            </div>
                        }
                        //con PopUp
                    }} />


                    <Route path="/nosotros" exact render={() => {
                        return <div>
                            <BarraNavDeslizable />
                            <Contact />
                            <Whatsapp />
                            <Logo className="derecha" img={logoBlanco} />
                            <Presentacion video={video}/>
                            <Imagenes />
                            <MisionVision />
                            <br />
                            <br />
                            <br />
                            <ContactoMap titulo="mapa google maps 1" />
                            < Footer />
                            
                        </div>
                    }} />

                    <Route path="/servicios/integracion-de-tecnologias" exact render={() => {
                        return <div>
                            <Logo img={logoNegro} />
                            <Titulo subtitulo=" " titulo1="INTEGRACIÓN" titulo2="DE TECNOLOGÍAS" texto="Incorpore o unifique sus recursos tecnológicos adecuadamente para optimizar los procesos operativos de su compañía" img={imgTitulo3} />
                            <Cuadricula
                                titulo1="PLATAFORMAS DE VOZ IP"
                                titulo2="ASESORÍA Y EJECUCIÓN DE PROYECTOS TECNOLÓGICOS"
                                titulo3="ADECUACIÓN, DISEÑO E IMPLEMENTACIÓN DE DATACENTER"
                                titulo4="APLICACIONES MOVILES Y TRANSACCIONALES"
                                titulo5="BIG DATA E INTELIGENCIA DE NEGOCIOS (BI)"
                                titulo6="SERVICIO EN LA NUBE"
                            />
                            <ContactoMap titulo="mapa google maps 4" />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/servicios/seguridad-informatica" exact render={() => {
                        return <div>
                            <Logo img={logoNegro} />
                            <Titulo subtitulo="" titulo1="SEGURIDAD" titulo2="INFORMÁTICA" texto="Proteja uno de los activos mas importantes de su compañía: la información, apoyado en manos expertas a través de la implementación de estrategias adecuadas de seguridad " img={imgTitulo4} />
                            <Cuadricula
                                titulo1="CONFIGURACIÓN Y ADMINISTRACIÓN DE EQUIPOS DE SEGURIDAD"
                                titulo2="PRUEBAS DE ETHICAL HACKING"
                                titulo3="ANALISIS DE VULNERABILIDAD"
                                titulo4="HARDENING DE SERVICIOS Y ASEGURAMIENTO DE PROCESOS"
                                titulo5="ISO 27001"
                                titulo6="ADMINISTRACION DE CONTRASEÑAS IT"
                            />
                            <ContactoMap titulo="mapa google maps 5" />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/servicios/servidores" exact render={() => {
                        return <div>
                            <Logo img={logoNegro} />
                            <Titulo subtitulo="" titulo1="" titulo2="SERVIDORES" texto="Optimice y agilice sus procesos informáticos a través de plataformas seguras, escalables y confiables, mejorando la experiencia de servicio de sus clientes." img={imgTitulo5} />
                            <Cuadricula
                                titulo1="PLATAFORMAS SOBRE MICROSOFT WINDOWS Y LINUX"
                                titulo2="CONFIGURACIÓN, ASEGURAMIENTO Y ADMINISTRACIÓN"
                                titulo3="VIRTUALIZACIÓN Y CLUSTERING (ALTA DISPONIBILIDAD)"
                                titulo4="ALMACENAMIENTO MASIVO"
                                titulo5="SISTEMA DE BACKUP Y RESPALDO DE INFORMACIÓN"
                                titulo6="BASE DE DATOS "
                            />
                            <ContactoMap titulo="mapa google maps 6" />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/aliados-estrategicos" exact render={() => {
                        return <div>
                            <BarraNavDeslizable />
                            <Contact />
                            <Whatsapp />
                            <Logo img={logoNegro} />
                            <Titulo subtitulo="" titulo1="ALIADOS" titulo2="ESTRATEGICOS" texto="Gracias al desarrollo de altas competencias técnicas y comerciales, hemos logrado alianzas estratégicas con importantes líderes del mercado tecnológico, que nos permiten estar a la vanguardia en productos y servicios, entregar a nuestros clientes costos y soluciones diferenciadoras contando con todo el respaldo directo de los fabricantes" img={imgTitulo1} />
                            <br /><br /><br /><br /><br />
                            <CuadriculaAliados
                                img1={ExitoAruba}
                                img2={ExitoMicrosoft}
                                img3={ExitoPanasonic}
                                img4={ExitoRedHad}
                                img5={ExitoHp}
                                img6={ExitoCisco}
                                img7={ExitoBit}
                                img8={ExitoDell}
                                img9={ExitoEset}
                                img10={ExitoUbiquiti}
                                img11={ExitoVeritas}
                                img12={ExitoVmware}
                            />
                            <ContactoMap titulo="mapa google maps 2" />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/casos-de-exito" exact render={() => {
                        return <div>
                            <BarraNavDeslizable />
                            <Contact />
                            <Whatsapp />
                            <Logo img={logoNegro} />
                            <Titulo subtitulo="" titulo1="CASOS DE" titulo2="EXITO" texto="Nos sentimos orgullos de contar con grandes clientes que han depositado su confianza en nuestra compañía, generando alternativas innovadoras y propiciando un impacto positivo en sus operaciones, algunos de ellos:" img={imgTitulo2} />
                            <CuadriculaCasosExito
                                img1={AliadosAccion}
                                img2={AliadosApiros}
                                img3={AliadosCom}
                                img4={AliadosCooperativa}
                                img5={AliadosGrupo}
                                img6={AliadosServilla}
                                img7={Aliados1}
                                img8={Aliados2}
                                img9={Aliados3}
                                img10={Aliados4}
                                img11={Aliados5}
                                img12={Aliados6}
                            />
                            <ContactoMap titulo="mapa google maps 3" />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/servicios/soluciones-en-redes" exact render={() => {
                        return <div>
                            <Logo img={logoNegro} />
                            <Titulo subtitulo="Soluciones integrales en Redes de Datos " titulo1="SOLUCIONES" titulo2="EN REDES" texto="Contamos con un amplio portafolio a nivel de suministro de equipos y servicios profesionales para redes de datos, entregando soluciones con alto desempeño, seguras y fáciles de administrar.
                            Prepare y adecue su red de datos para permitir la integración de nuevas tecnologías 
                            " img={imgTitulo6} />
                            <br/><br/><br/><br/><br/><br/>
                            <Cuadricula 
                                titulo1="IMPLEMENTACIÓN Y OPTIMIZACIÓN DE REDES WIFI"
                                titulo2="DISEÑO Y ARQUITECTURA"
                                titulo3="CONFIGURACIÓN Y ADMINISTRACIÓN DE SWITCHES Y ENRUTADORES"
                                titulo4="BALANCEADORES DE CARGA"
                                titulo5="REDES CONVERGENTES"
                                titulo6="CONTROL DE ACCESO BIOMETRICO"
                            />
                            <ContactoMap titulo="mapa google maps 6" />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/servicios/servicios-profesionales" exact render={() => {
                        return <div>
                            <Logo className="derecha" img={logoNegro} />
                            <Titulo  titulo1="SERVICIOS" titulo2="PROFESIONALES" texto="Contamos con personal experto y certificado a su servicio, para brindarle soluciones integrales en las fases de diseño (innovación), gestión, ejecución y auditoria de proyectos tecnológicos." img={imgTitulo7} />
                            <Cuadricula
                                titulo1="PLANES DE CONTINGENCIA Y RIESGO"
                                titulo2="REINGENIERÍA EN INFRAESTRUCTURA Y PROCESOS"
                                titulo3="AUDITORIAS Y ASESORIAS IT"
                                titulo4="OUTSOURCING DE RECURSOS INFORMÁTICOS"
                                titulo5="GERENCIA DE PROYECTOS CON METODOLOGÍA PMI - SCRUM"
                                titulo6="CAPACITACIONES"
                            />
                            <ContactoMap titulo="mapa google maps 7" />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/servicios/servicios-gestionados" exact render={() => {
                        return <div>
                            <Logo className="derecha" img={logoNegro} />
                            <TituloAlterno />
                            <ServiciosInfo
                                img={img1}
                                titulo="MANAGED SECURITY"
                                l1="OUTSOURCING – SERVICIOS DE SEGURIDAD INFORMÁTICA"
                                l2="GESTIÓN DE VULNERABILIDAD"
                                l3="MONITOREO DIRECTORIO ACTIVO"
                            />
                            <ServiciosInfoInverso
                                img={img2}
                                titulo="CLOUD SECURITY"
                                l1="EDR (DETECCIÓN Y RESPUESTA DE ENDPOINT - ANTI RANSOMWARE)"
                                l2="CASB (FUGA DE INFORMACIÓN)"
                            />
                            <ServiciosInfo4
                                img={img3}
                                titulo="DATA SECURITY"
                                l1="MONITOREO DE CAMBIOS"
                                l2="IRW (PLATAFORMA PARA PRUEBAS SEGURAS)"
                                l3="SRI (INTELIGENCIA DE NEGOCIOS APLICADO A LA SEGURIDAD)"
                                l4="AUDITORIA UTM"
                            />
                            <ServiciosInfoInverso
                                img={imgTitulo5}
                                titulo="CONSULTORIAS"
                                l1="VALORACIÓN DE SEGURIDAD Y DE RIESGOS"
                                l2="SERVICIOS DE SEGURIDAD FORENSE"
                            />
                            <ContactoMap titulo="mapa google maps 8" />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/trabaje-con-nosotros" exact render={() => {
                        return <div>
                            <BarraNavDeslizable />
                            <Contact />
                            <Whatsapp />
                            <Logo img={logoBlanco} />
                            <Presentacion2 />
                            <OfertaLab />
                            <br/><br/><br/>
                            <ContactoInfo />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/contactenos" exact render={() => {
                        return <div>
                            <BarraNavDeslizable />
                            <Contact />
                            <Whatsapp />
                            <Logo className="derecha" img={logoNegro} />
                            <Contactenos />
                            <Footer />
                        </div>
                    }} />

                    <Route path="/login" exact render={() => {
                        if (localStorage.admintoken) {
                            return <Redirect to='/admin' />
                        } else{
                            if (localStorage.usertoken) {
                                return <Redirect to='/user' />
                            }else {
                                return <div>
                                    <BarraNavDeslizable />
                                    <Login />
                                </div>
                            }
                        }
                    }} />

                    <Route path="/registrarse" exact render={() => {
                        if (localStorage.admintoken) {
                            return <div>
                                <Register />
                            </div>
                        } else {
                            return <Redirect to='/' />
                        }
                    }} />

                    <Route path="/user" exact render={() => {
                        if (localStorage.usertoken) {
                            return <div>
                                <Datos />
                            </div>
                        } else {
                            return <Redirect to='/' />
                        }
                    }} />

                    <Route path="/admin" exact render={() => {
                        if (localStorage.admintoken) {
                            return <div>
                                <OfertaLaboral />
                            </div>
                        } else {
                            return <Redirect to='/' />
                        }
                    }} />

                </Switch>
            </Router>
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(
        <GoogleReCaptchaProvider className="recaptcha" reCaptchaKey="6LeOA8oUAAAAABaUxGmH_E3mYrhgBhjxWUT_3jeI" >
            <Favicon url={icono} />
            <App />
        </GoogleReCaptchaProvider>,
    document.getElementById('App'));
}

