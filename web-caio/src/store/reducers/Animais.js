import { SET_ANIMAIS } from "../actions/types"

const initialState = []

const animaisReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ANIMAIS:
            return action.payload
        default:
            return state
    }
}

export default animaisReducer