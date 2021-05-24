export function favorite(payload) {
  return {
    type: 'fav/SET',
    payload
  };
}

export function favout(payload) {
  return {
    type: 'fav/REMOVE',
    payload
  };
}
