import React, { Component } from 'react'
import './Imagenes.css'

import Cisco from '../../../img/CasosExito/ExitoCisco.jpg'
import Dell from '../../../img/CasosExito/ExitoDell.jpg'
import Hp from '../../../img/CasosExito/ExitoHp.jpg'
import Ibm from '../../../img/CasosExito/ExitoIbm.jpg'
import Microsoft from '../../../img/CasosExito/ExitoMicrosoft.jpg'
import Panasonic from '../../../img/CasosExito/ExitoPanasonic.jpg'
import RedHad from '../../../img/CasosExito/ExitoRedHad.jpg'
import Ubiquiti from '../../../img/CasosExito/ExitoUbiquiti.jpg'
import Veritas from '../../../img/CasosExito/ExitoVeritas.jpg'
import Vmware from '../../../img/CasosExito/ExitoVmware.jpg'

export default class Imagenes extends Component {
    render() {
        return (
            < div className = "Imagenes" >
                <img src={RedHad} alt=""/>
                <img src={Cisco} alt=""/>
                <img src={Ibm} alt=""/>
                <img src={Microsoft} alt=""/>
                <img src={Dell} alt=""/>
                <img src={Hp} alt=""/>
            </div>
        )
    }
}
