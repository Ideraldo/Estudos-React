import "./Input.css"
import React, { useState } from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '15px'
            }}>
                {/*O 'Fluxo' da mudança, é feito do estado para a interface, ou seja, o componente visual só é alterado se o estado for modificado.*/}
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                {/*Quando o valor é undefined, o componente não é controlado.*/}
                <input value={undefined} />
            </div>
        </div>
    )
}