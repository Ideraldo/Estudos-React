import React from 'react'
import "./App.css"

import MegaSena from "./components/mega/Mega"
import Contador from "./components/contador/Contador"
import input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Card from './components/layout/Card'
import ComParametro from './components/basicos/ComParametro'
import Fragmentos from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro.jsx'
import Input from './components/formulario/Input'


export default _ => (
    <div className="App">
        <h1>Fundamentos React2</h1>

        <div className="Exercicios">
            <Card titulo="#13 - Mega Sena" color="#424242">
                <MegaSena></MegaSena>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#ffbf00">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#32CD32">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Condicional ParOuImpar" color="#981395">
                <ParOuImpar numero={57}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
            </Card>

            <Card titulo="#07 - Desafio de Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                    <FamiliaMembro nome="Lucas" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#090">
                <Aleatorio min={1} max={60} />
            </Card>

            {/* A cor do fragmento a baixo não está sendo passada, portanto será setada para a definida por default.*/}
            <Card titulo="#03 - Fragmentos" color="">
                <Fragmentos></Fragmentos>
            </Card>

            <Card titulo="#02 - Com parametro" color="#FF5733">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#2689B0">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)