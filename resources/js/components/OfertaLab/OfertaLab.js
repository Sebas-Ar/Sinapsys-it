import React, { Component } from 'react'
import './OfertaLab.css'
import Axios from 'axios'

export default class OfertaLab extends Component {

    constructor(props){
        super(props)
        this.state = {
            experiencia: 0,
            cargo: '',
            descripcion: '',

            data: []
        }
    }

    async componentDidMount() {
        const ofertas = await Axios.get('/api/ofertas')
        this.setState({
            data: ofertas.data
        })
    }


    render() {
        return (
            <div>
            {
                this.state.data.map(oferta => (
                    <div key={ oferta.id } className="OfertaLab">
                        <div className="xp">
                            <h2>{ oferta.experiencia }</h2>
                            <h2><span className="s1">AÑOS</span><span className="s2">DE EXPERIENCIA</span></h2>
                        </div>
                        <div className="info">
                        <h1>{ oferta.cargo }</h1>
                        <p>{ oferta.descripcion }</p>
                        </div>
                    </div>
                ))
            }
            </div>
        )
    }
}
