import React, { Component } from 'react'
import './Presentacion.css'

export default class Presentacion extends Component {

    constructor(props){
        super(props)

        this. scroll = this.scroll.bind(this)
    }

    scroll() {
        
        let ancho = screen.width
        if(ancho < 400){
            window.scrollTo(0,1290)
        }else {
            if(ancho <540){
                window.scrollTo(0, 1320)
            }else {
                if (ancho < 600) {
                    window.scrollTo(0, 1020)
                } else {
                    if (ancho < 800) {
                        window.scrollTo(0, 1050)
                    } else {
                        if (ancho < 1000) {
                            window.scrollTo(0, 1070)
                        } else {
                            if (ancho < 1070) {
                                window.scrollTo(0, 850)
                            } else {
                                window.scrollTo(0, 870)
                            }
                        }
                    }
                }
            }
        }
    }

    render() {
        return (
            < div className="Presentacion" >
                <video autoPlay loop="True" muted >
                    <source src={this.props.video} type="video/mp4"/>
                </video>
                <div>
                    <h1>NOSOTROS</h1>
                    <div>
                        <p>Somos una compañía integradora de servicios de tecnología</p>
                        <p>cuyos pilares se basan en ofrecer los más altos niveles de servicio, soluciones ajustadas a las necesidades, a través del uso de estándares de calidad internacionales y un equipo humano interdisciplinario calificado que proporcionen la mayor productividad y grado de satisfacción a nuestros clientes garantizan los mejores resultados.</p>
                        <p>cuyos pilares se basan en ofrecer los más altos niveles de servicio, soluciones ajustadas a las necesidades, a través del uso de estándares de calidad internacionales.</p>
                        <button onClick={this.scroll}>CONOCE MÁS</button>
                    </div>
                </div>
                <div className="subtitulo">
                    <h2>NUESTROS ALIADOS</h2>
                </div>
            </div>
        )
    }
}
