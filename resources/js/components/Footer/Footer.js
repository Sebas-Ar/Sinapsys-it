import React, { Component } from 'react'
import './Footer.css';

var timer = null;

export default class Footer extends Component {

    constructor(props){
        super(props)

        this.state = {
            year: new Date
        }

        this.contador = this.contador.bind(this)
        this.scroll = this.scroll.bind(this)
    }
    
    contador() {

        var i = window.scrollY;
        window.scrollTo(0, i - 15);
        if (window.scrollY === 0) clearInterval(timer)
        
    }

    scroll() {

        timer = setInterval(this.contador, 1);
        
    }

    render() {
        
        
        return (
            <footer>
                <p> © {this.state.year.getFullYear()} Sinapsys IT. Todos los derechos reservados.</p>
                <div className="socialFooter">
                    <a href="https://www.linkedin.com/company/sinapsys-it/?viewAsMember=true" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
                <button onClick={this.scroll}><i className="fas fa-arrow-alt-circle-up"></i></button>
            </footer>
        )
    }
}
