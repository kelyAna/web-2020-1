import React, { Component } from 'react'
import Card from './Card'
import './Navigate.css'

import { connect } from 'react-redux'
import alterarValor from '../store/actions/createAction'

class Navigate extends Component {

    maior() {
        const maior = (this.props.valor1 < this.props.valor2) ? this.props.valor2 : this.props.valor1
        this.props.alterarValor(maior)
    }

    mult() {
        const multiplicacao = (this.props.valor1 < 0) ? 0 : this.props.valor2 * this.props.valor1
        this.props.alterarValor(multiplicacao)
    }

    soma() {
        const soma = this.props.valor1 + this.props.valor2
        this.props.alterarValor(soma)
    }


   
    render() {
        return (
            <Card className='valor' red>
                <div className='navigate'>
                    <input value={this.props.valor1}/>
                    <input value={this.props.valor2}/>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        soma: state.Soma.soma,
        multiplicacao: state.Multiplicacao.multiplicacao,
        maior: state.Maior.maior,
        valor1: state.Valor1.valor1,
        valor2: state.Valor2.valor2
    }
}

function mapActionCreatorToProps(dispatch){
    return {
        alterarValor(valor){
            const action = alterarValor(valor)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapActionCreatorToProps)(Navigate)
