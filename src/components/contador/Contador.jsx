import "./Contador.css"
import React, { Component } from 'react'
import Display from "./Display"
import Botoes from "./Botoes"
import Passo from "./PassoForm"

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    incremento = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <Passo passo={this.state.passo} setPasso={this.setPasso}></Passo>
                <Botoes setIncrementar={this.incremento} setDecrementar={this.decremento}></Botoes>
            </div>
        )
    }

}

export default Contador