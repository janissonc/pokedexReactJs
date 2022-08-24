import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { POKEMON_API_URL } from '../config';

import {Box,CircularProgress,makeStyles,Typography,Grid,Button} from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"

const useStyles = makeStyles((theme)=>({
  pokedexContainer:{
      height:"80vh",
      backgroundColor:"#000",
      color:"#fff",
      marginTop:75,
      textAlign:"center",
      borderRadius:5,
      paddingTop:30
  },
  textTitle:{
    textTransform:"uppercase",
    fontFamily: "fantasy",
    
  },
  pokemonImage:{
    width:"170px",
    height:"170px"
  },
  pokemonInfoContainer:{
    bottom:90,
    position:"absolute",
    width:"100%"
  },
  separator: {
    height:"0.01mm",
    width:"95%"
  },
  favourite:{
    height:50,
    width:50,
    marginBottom:10
  },
  text:{
    fontSize:30
  }
}))

export default function PokemonDetails() {
    const {id} = useParams();
    const classes = useStyles();
    const [pokemon, setPokemon] = useState(null)

    useEffect(()=>{
        axios.get(`${POKEMON_API_URL}/${id}`).then((res)=>{
          console.log(res)
            if(res.status >=200 && res.status <=300){
                setPokemon(res.data)
            }
        })
    },[id])

  return (
    <Box>
      <Box className={classes.pokedexContainer}>
        {pokemon ? 
          <>
            <Typography className={classes.textTitle} variant="h1">
              {pokemon.name}
            </Typography>
            <img className={classes.pokemonImage} src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <Box className={classes.pokemonInfoContainer}>
              <hr className={classes.separator}/>
              <Grid container>
                <Grid item md={1}>
                  <Button className={classes.favourite}>
                    <FavoriteIcon style={{color:"#fff", fontSize:45}}/>
                  </Button>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text} >
                    Nome <br/>{pokemon.name}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text} >
                    Altura <br/>{pokemon.height}m
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text} >
                    Peso <br/>{pokemon.weight}kg
                  </Typography>
                </Grid>
                
                  {pokemon.types.map((pokemonType)=>{
                    const {name} = pokemonType.type
                    return(
                      <Grid item md={2}>
                        <Typography className={classes.text} >
                          Type <br/>{name}
                        </Typography>
                      </Grid>
                    )
                  })}
              </Grid>
            </Box>
          </> 
        :<CircularProgress style={{marginTop:100}} />}
      </Box>
    </Box>
  )
}
