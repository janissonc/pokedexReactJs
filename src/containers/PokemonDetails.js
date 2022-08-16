import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { POKEMON_API_URL } from '../config';


export default function PokemonDetails() {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null)
    useEffect(()=>{
        axios.get(`${POKEMON_API_URL}/${id}`).then((res)=>{
            
            if(res.status >=200 && res.status <=300){
                setPokemon(res.data)
                console.log(res)
            }
        })
    },[])
  return (
    <div style={{marginTop:200}}>{pokemon.name}</div>
  )
}
