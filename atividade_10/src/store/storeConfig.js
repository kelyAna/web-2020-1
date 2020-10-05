import {createStore, combineReducers} from 'redux'


const reducers = combineReducers({

    Soma: function(state, action){
        switch(action.type){
            case 'NOVO_VALOR':
                return {
                    soma: action.payload
                }
            default: 
                return{
                    soma:0
                } 
        }
    },

    Maior : function(state, action){
        switch(action.type){
            case 'NOVO_VALOR':
                return{
                    maior: action.payload
                }
            default:
                return{
                    maior: 0
                }
        }
    },

    Multiplicacao: function (state, action) {
        switch(action.type){
            case 'NOVO_VALOR':
                return{
                    mult: action.payload
                }
            default:
                return{
                    mult: 0
                }
        }
    },

    Valor1: function (state, action) {
        return {
            valor1: 2
        }
    },

    Valor2: function (state, action) {
        return {
            valor2: 3
        }
    }

}
    
) 

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig