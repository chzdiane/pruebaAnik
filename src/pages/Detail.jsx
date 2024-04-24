import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener el personaje");
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
      }
    };
    fetchCharacter();
  }, [id]);

  console.log(character);

  return (
    <div>
      {character ? (
        <div className="card shadow-md flex m-3 flex-col md:w-3/12 justify-center">
          <div className="card-text font-bold">
            <img src={character.image} alt={character.name} />
            <div className="flex justify-center flex-col">
              <h2>{character.name}</h2>
              <p>{character.species}</p>
              <p>{character.status}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

Detail.propTypes = {
  characterId: PropTypes.object.isRequired,
};

export default Detail;
