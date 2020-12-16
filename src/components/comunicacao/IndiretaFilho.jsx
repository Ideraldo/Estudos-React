import alunos from '../../data/alunos'
import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

    //Retorna o array de nomes usado no outro exercicio de alunos
    const nomes = alunos.map(aluno => {
        return (
            aluno.nome
        )
    })

    //Pega aleatoriamente um dos nomes presentes no array inserido (no caso, o dos nomes).
    function gerarNome(lista) {
        const minimo = 0
        const maximo = 9
        const selecionarAluno = parseInt(Math.random() * (maximo - minimo)) + minimo
        console.log(selecionarAluno)
        return (
            lista[selecionarAluno]
        )
    }

    return (
        <div>
            <button onClick={_ => cb(gerarNome(nomes), gerarIdade(), gerarNerd)}>Fornecer informações</button>
        </div>
    )
}   