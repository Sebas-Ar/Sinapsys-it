import React, { useEffect, useState } from 'react'
import './PopUp.css'

const PopUp = ({ video , onClik}) => {

    const [activar, setActivar] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActivar(true)
        }, 5000)
        return () => {
            clearTimeout(timer)
        };
    });

    function load() {
        document.getElementById('tit').style.animation = "mostrar 1s 3s linear forwards;"
        console.log(document.getElementById('tit'));
    }

    if (activar) {
        return <div className="PopUp" id="PopUp" onClick={onClik}>
            <div className="ventana">
                <button className="cerrar" onClick={onClik}><i className="fas fa-times"></i></button>
                <h1 id="tit">Sinapsys it</h1>
                <video preload="true" autoPlay muted onLoadedData={load} >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    }else {
        return <div></div>
    }

}

export default PopUp
