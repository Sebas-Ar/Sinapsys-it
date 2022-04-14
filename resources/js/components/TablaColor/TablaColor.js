import React, { Component } from 'react'
import './TablaColor.css'

export default class TablaColor extends Component {
    render() {
        return (
            <div className="TablaColor">
                <h5 className="t1"><span>1</span></h5>
                <h5 className="rojo t2"><span className="rojo">2</span></h5>
                <h5 className="t3"><span>3</span></h5>
                <span className="titulos rojo uno">
                    <h2 className="tit1" >PERFILES</h2>
                    <h2 className="tit2" >NECESARIOS</h2>
                </span>
                <div className="azul dos"><h2 className="titulos">TALENTO</h2></div>
                <div className="rojo tres"><h2 className="titulos">EXPERIENCIA</h2></div>
                <div className="sinColor sinColor1"></div>
                <div className="sinColor sinColor2"></div>
                <div className="sinColor sinColor3"></div>
                <div className="container container1 rojo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea distinctio natus quidem deleniti.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="container azul container2 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea distinctio natus quidem deleniti.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="container rojo container3 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea distinctio natus quidem deleniti.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="azul color1">.</div>
                <div className="rojo color2"></div>
                <div className="azul color3"></div>
                <div className="vacio1"></div>
                <div className="vacio2"></div>
            </div>
        )
    }
}
