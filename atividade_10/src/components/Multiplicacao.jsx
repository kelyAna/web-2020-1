import React, {Component} from 'react';
import Card from './Card'
import { connect  } from 'react-redux'

class Multiplicacao extends Component{
    render(){
        return (
            <Card title='mult' blue>
                <div>
                    <h1>
                        {this.props.valor2 * this.props.valor1}
                    </h1>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        valor1: state.Valor1.valor1,
        valor2: state.Valor2.valor2,
        multiplicacao: state.Multiplicacao.multiplicacao
    }
}

export default connect(mapStateToProps)(Multiplicacao)