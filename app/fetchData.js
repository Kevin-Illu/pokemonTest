export async function getPokemonArr() {
  const pokemonsArr = []
  for (let id = 1; id <= 20; id++) {
    const randomId = Math.floor(Math.random() * 806 + 1)
    let [pokemon] = await getPokeData(randomId)
    const { id, name, sprites, stats
    } = pokemon;
    pokemonsArr.push({
      id,
      name,
      sprite: sprites.front_default,
      stats
    })
  }
  return pokemonsArr;
}

export async function getPokeData(id) {
  const endPoint = "https://pokeapi.co/api/v2/pokemon/"
  const [data] = await Promise.all([
    fetch(`${endPoint}${id}`)
  ])
  return await Promise.all([
    data.json()
  ])
}
