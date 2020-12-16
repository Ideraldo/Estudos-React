import React from 'react'

export default props => {

    return (
        <div style={{marginBottom: 15}}>
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
    )
}