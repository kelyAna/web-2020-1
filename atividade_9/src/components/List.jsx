import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'



const ListPage = () => (
    <FirebaseContext.Consumer>
        { (contexto) => <List firebase={contexto} /> }
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props)
        this._isMounted = false
        this.state = { disciplinas: [] }
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({loading:true})

        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (disciplinas) => {
                if(disciplinas){
                    if(this._isMounted){
                        this.setState({disciplinas:disciplinas, loading:false})
                    }
                }
            }
        )
    }

    componentWillUnmount(){
        this._isMounted = false
    }


    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i) => {
                return <TableRow disciplina={disciplina}
                 key={i} 
                apagarElementoPorId={this.apagarElementoPorId}
                firebase={this.props.firebase}
                />
            }
        )
    }

    apagarElementoPorId(id) {
        let disciplinasTemp = this.state.disciplinas
        for (let i = 0; i < disciplinasTemp.length; i++) {
            if (disciplinasTemp[i]._id === id) {
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

export default ListPage;