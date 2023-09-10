import axios from 'axios';

/**
 * Consulta os dados de endereço com base no CEP utilizando a API dos Correios.
 * @param {string} cep O CEP a ser consultado.
 * @returns {Promise<Object>} Uma promessa que é resolvida com os dados de endereço.
 */
export async function consultarEnderecoPorCep(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        // Verificar se a requisição foi bem-sucedida
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Erro ao consultar o CEP.');
        }
    } catch (error) {
        console.error('Erro ao consultar o CEP:', error);
        throw new Error('Erro ao consultar o CEP.');
    }
}