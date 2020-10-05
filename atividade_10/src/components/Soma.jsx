import React, { Component } from 'react';
import Card from './Card'
import { connect  } from 'react-redux'

class Soma extends Component {
    render() {
        return (
            <Card title='soma' blue>
                <h1>
                    {this.props.valor1 + this.props.valor2}
                </h1>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        valor1: state.Valor1.valor1,
        valor2: state.Valor2.valor2,
        soma: state.Soma.soma
    }
}

export default connect(mapStateToProps)(Soma)