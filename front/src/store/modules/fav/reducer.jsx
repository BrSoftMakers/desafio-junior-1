const initialState = [];

export default function fav(state = initialState, { type, payload }) {
  switch (type) {
    case 'fav/SET':
      return [...state, payload];
    case 'fav/REMOVE':
      return state.filter(element => element !== payload);
    default:
      return state;
  }
}
