import React from 'react'

/*
export default function random(num1, num2){
   
        const aleatorio = parseInt(Math.random(num1, num2)*10

        return (
        <div>
            <p>{aleatorio}</p>
        </div>
        )
    }
*/

export default props => {
    // Pega o conteúdo
    //const min = props.min
    //const max = props.max

    //Usando destructuring para pegar o conteúdo.
    const { min, max } = props

    //Numero aleatorio inteiro gerado pelos números coletados anteriormente
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    //Retorna o resultado obtido
    return (
        <div>
            <h2>Valor alearório</h2>
            <p><strong>Valor Mínimo: </strong> {min}</p>
            <p><strong>Valor Mínimo: </strong> {max}</p>
            <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
        </div>
    )
}