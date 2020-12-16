import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/tabelaProdutos'

export default props => {
    let i = 0
    const produtosTabela = produtos.map(produto => {
        return (
            <div>
                <tr key={produto.id}>
                    {produto.NomeProduto}
                </tr>
            </div>
        )
    })
    const IDprodutosTabela = produtos.map(produto => {
        return (
            <div>
                <tr key={produto.id}>
                    {produto.id}
                </tr>
            </div>
        )
    })
    const PrecoprodutosTabela = produtos.map(produto => {
        return (
            <div>
                <tr key={produto.id}>
                    R$ {produto.preco}
                </tr>
            </div>
        )
    })

    return (
        <div className="tabelaProdutos">
            <table>
                <tr>
                    <td> ID:</td>
                    <td> Produto:</td>
                    <td> Preco:</td>
                </tr>
                <tr>
                    <td>{IDprodutosTabela}</td>
                    <td>{produtosTabela}</td>
                    <td>{PrecoprodutosTabela}</td>
                </tr>

            </table>
        </div>
                   
    )
}