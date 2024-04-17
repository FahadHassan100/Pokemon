import axios from 'axios';

export const getAllCategory = async () => {

    const getCategories = await axios.get('https://pokeapi.co/api/v2/type')
    return getCategories.data.results;


}


export const getAllPokemon = async (url:any) => {

    //return url;
    const getCategories = await axios.get(url)
    return getCategories.data.pokemon;


}