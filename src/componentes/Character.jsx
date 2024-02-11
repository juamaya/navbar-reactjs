import './estilos.css'
function Character({ character }) {
    return (
      <div className="card " >
        <h3>{character.name}</h3> 
        <img className="image " src={character.image} alt={character.name} /> 
        <p className=" text"><b> Id: </b> {character.id}</p>
        <p className=" text "><b> Location:</b> {character.location.name}</p>
        <p className=" text "> <b> Species: </b> {character.species}</p>
        <p className=" text"><b>  Origin: </b> {character.origin.name}</p>
        <p className=" text"><b>  Gender: </b> {character.gender}</p>
        <p className=" text"><b>  Status: </b> {character.status}</p>
      </div>
    );
  }
  
  export default Character;