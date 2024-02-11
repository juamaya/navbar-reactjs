import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

import './estilos.css'

function CharacterList() {
    const [characters, setcCharacters] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?page=${page}`
            );
            const data = await response.json();
            console.log(data.results);
            setcCharacters(data.results);
        }
        fetchData();
    }, [page]);

    return (
        <div  >
            <NavPage page={page} setPage={setPage} />
            <div className="container1  ">
                {characters.map((character) => {
                    return (
                        <div className="" key={character.id}>
                            <Character character={character} />
                        </div>
                    );
                })}

            <div  >
            </div>
              
            </div>
           
        </div>
    );
}

export default CharacterList;