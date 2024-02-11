import React from 'react'
import CharacterList from "../componentes/CharacterList";

const Api = () => {
  return (
    <div className="bg-secondary text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>

      <CharacterList />
    </div>
  )
}

export default Api