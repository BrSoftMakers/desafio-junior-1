import { SET_ANIMAL } from "../actions/types"

const initialState = {
    id: '',
    nome: '',
    idade: '',
    tipo: '',
    raca: '',
    nomeDono: '',
    telefoneDono: '',
    createdAt: '',
    updatedAt: ''
}

const animalReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ANIMAL:
            return { ...state, ...action.payload}
        default:
            return state
    }
}

export default animalReducer