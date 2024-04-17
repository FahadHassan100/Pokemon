import React, { useState } from "react";
import Banner from "../components/Banner";
import { getAllCategory, getAllPokemon } from "../api/data";
import Link from "next/link";
import CategoryBox from "../components/CategoryBox";
import axios from "axios";
import PokemonList from "../components/PokemonList";

const Category = async ({ params }: any) => {
  const { category } = params;

  const getAllCat = await getAllCategory();

  const selectType = getAllCat.find((items: any) => {
    if (items.name == category) return items.url;
  });

  const getPokemons = await getAllPokemon(selectType.url);
  //console.log(getPokemons);

  //   getPokemons.map(async (items: any) => {
  //     // console.log(items.pokemon.url);
  //     const pokemonsList = await axios.get(items.pokemon.url);
  //     //console.log(pokemonsList.data);
  //     let allpokemons = pokemonsList.data
  //   });

  const pokemonsData = await Promise.all(
    getPokemons.map(async (item: any) => {
      const response = await axios.get(item.pokemon.url);
      return response.data;
    })
  );

  //console.log(pokemonsData);

  return (
    <div>
      <Banner
        setClass="parallax2"
        imageUrl="/pokemons.png"
        bannerTitle={`${category} Pokemon's`}
      />
      <PokemonList pokemonData={pokemonsData} />
    </div>
  );
};

export default Category;
