import React, { Component } from 'react';


export default class Questao2 extends Component {
    render() {
        return (
            <div>
                <h3>Nome: {this.props.nome}</h3>
                <h3>Curso: {this.props.curso}</h3>
                <h3>Cidade de origem: {this.props.cidade}</h3>

            </div>
        )
    }
}