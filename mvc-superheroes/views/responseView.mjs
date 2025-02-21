import SuperheroesDataSource from "../repository/superheroesDataSource.mjs";

export const renderizarSuperheroe = (superheroe) => {
    return JSON.stringify(superheroe, null, 2);
}

export const renderizarListaSuperheroes = (superheroe) => {
    return JSON.stringify(SuperheroesDataSource, null, 2);
}