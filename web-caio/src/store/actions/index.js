import * as types from './types'

export const setStoreAnimais = (data) => {
    return async (dispatch) => {
        dispatch({
            type: types.SET_ANIMAIS,
            payload: data,
        })
    }
}

export const setStoreAnimal = (data) => {
  return async (dispatch) => {
      dispatch({
          type: types.SET_ANIMAL,
          payload: data,
      })
  }
}