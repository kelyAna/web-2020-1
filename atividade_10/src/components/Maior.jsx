import React, { Component } from 'react';
import Card from './Card'
import { connect  } from 'react-redux'

class Maior extends Component {
    render() {
        return (
            <Card title='maior' blue>
                <h1>
                    {(this.props.valor1 < this.props.valor2) ? this.props.valor2 : this.props.valor1}
                </h1>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        valor1: state.Valor1.valor1,
        valor2: state.Valor2.valor2,
        maior: state.Maior.maior
    }
}

export default connect(mapStateToProps)(Maior)