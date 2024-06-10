import { useState, useEffect } from "react"


export default function Pokedex(){
    const [ id, setId ] = useState(1);
    const [ pokemon, setPokemon ] = useState(null);

    const fetchData = async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        }catch(error){
            console.error("Erro: ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]
    );

    const nextPokemon = () => {
        setId(id + 1);
    }

    const previousPokemon = () => {
        setId(id - 1);
    }

    return(
        <div>
            {pokemon && (
                <div className="fundo">
                   <div className="pokemon">
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} 
                        style={{width:"200px;"}} class="pokemon-gif"/>
                        <div className="botoes">
                            <button onClick={previousPokemon}>Anterior</button>
                            <button onClick={nextPokemon}>Próximo</button>
                        </div>
                    </div> 
                </div>
            )
            
            }
        </div>
    )
}