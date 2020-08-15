import React, { Component } from 'react'
import Axios from 'axios'

import TableRow from './TableRow'


export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplinas: [] }

        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/disciplinas')
            .then(
                (res) => {
                    this.setState({ disciplinas: res.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }


    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i) => {
                return <TableRow disciplina={disciplina}
                 key={i} 
                apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )
    }

    apagarElementoPorId(id) {
        let disciplinasTemp = this.state.disciplinas
        for (let i = 0; i < disciplinasTemp.length; i++) {
            if (disciplinasTemp[i].id === id) {
                disciplinasTemp.splice(i, 1)
            }
        }
        this.setState({ disciplinas: disciplinasTemp })
    }
    render() {
        return (
            <div>
                <p>List Disciplina</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>CAPACIDADE</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>

        )
    }
}