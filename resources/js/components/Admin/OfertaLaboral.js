import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'
import logo from '../../../img/logo/blanco.png'
import Axios from 'axios'
import Logout from '../LoginRegister/Logout'
import './OfertaLaboral.css'

class OfertaLaboral extends Component {

    constructor(props){
        super(props)
        this.state = {
            experiencia: 0,
            cargo: '',
            descripcion: '',
            data: [],
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.close = this.close.bind(this)
        this.delete = this.delete.bind(this)
    }

    async componentDidMount() {
        const oferta = await Axios.get('/api/ofertas')
        this.setState({
            data: oferta.data
        })
    }

    async delete(id) {
        await Axios.delete(`api/ofertas/${id}`, id).then(res => {
            console.log(res);
        })
        const oferta = await Axios.get('/api/ofertas')
        this.setState({
            data: oferta.data
        })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    async handleSubmit() {
        try {
            await Axios.post('/api/ofertas', this.state)
            document.getElementById('message').style.animation = "actualizado 1s forwards"
            const oferta = await Axios.get('/api/ofertas')
            this.setState({
                data: oferta.data
            })
        } catch (error) {
            this.setState({
                errors: {
                    fildnone: 'Rellene todos los campos'
                }
            })
        }
    }

    close() {
        document.getElementById('message').style.animation = "ocultarAcualizado 1s forwards"
    }

    render() {
        return (
            <div>

                <div className="OfertaLaboral">
                    <Logout />
                    <header>
                        <Link className="reg" to="/registrarse">Registrar Usuario</Link>
                        <div className="center">
                            <Link  to="/">
                                <img src={ logo } alt="Logo"/>
                            </Link>
                        </div>
                        <h1>OFERTAS LABORALES</h1>
                    </header>
                    <div className="content">
                        <label>CARGO</label>
                        <input type="text" name="cargo" onChange={this.onChange} />
                        <label>EXPERIENCIA (años)</label>
                        <input type="number" name="experiencia" onChange={this.onChange} />
                        <label>CARACTERÍSTICAS</label>
                        <textarea name="descripcion" onChange={this.onChange} ></textarea>
                        <button onClick={ this.handleSubmit }>Agregar</button>
                        {
                            this.state.errors = ( this.state.errors.fildnone )
                                ? <p className='error'>{this.state.errors.fildnone}</p>
                                : <p></p>
                        }
                        <div className="mensaje" id="message">
                            <i className="fas fa-times" onClick={this.close}></i>
                            <p>El estado del componente ha sido actualizado</p>
                            <Link to="/web/trabaje-con-nosotros">Visualizar</Link>
                        </div>
                    </div>
                </div>
                {
                    this.state.data.map(oferta => (
                        <div key={oferta.id} className="OfertaLabAdmin">
                            <div className="xp">
                                <h2>{oferta.experiencia}</h2>
                                <h2><span className="s1">AÑOS</span><span className="s2">DE EXPERIENCIA</span></h2>
                            </div>
                            <h1>{oferta.cargo}</h1>
                            <p>{oferta.descripcion}</p>
                            <button value={ oferta.id } onClick={() => {
                                this.delete(oferta.id)
                            }}>Eliminar</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default withRouter(OfertaLaboral)