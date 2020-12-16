import React from 'react'
import alunos from '../../data/alunos'

export default (props) => {
    /* const li1 = (
        <li>
            {alunos[0].id}) {alunos[0].nome} - {alunos[0].nota}
        </li>
    ) */

    const alunosLista = alunos.map(aluno => {
        return (
            <li key={aluno.id} style={{ marginBottom: 3, marginTop: 4 }}>
                {aluno.id} - {aluno.nome} tem nota {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {alunosLista}
            </ul>
        </div>
    )
}