
export function alterarValor(valor){
    return {
        type: 'NOVO_VALOR',
        payload: valor
    }
}

export default alterarValor