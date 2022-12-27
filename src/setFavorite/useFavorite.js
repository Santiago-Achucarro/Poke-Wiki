const useFavorite = (pokemon, value) => {
  if (value) {
    localStorage.setItem(pokemon, value);
    localStorage.setItem(`pokemon${pokemon}`,pokemon)
  } else {
    localStorage.removeItem(pokemon);
    localStorage.removeItem(`pokemon${pokemon}`)
  }
};

export { useFavorite };
