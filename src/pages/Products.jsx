import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";

function Productos() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      if (!response.ok) {
        throw new Error("Network error");
      }
      const data = await response.json();
      if (data.results.length === 0) {
        setHasMore(false);
        return;
      }
      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center font-bold">Rick and Morty Characters</h1>
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchCharacters}
        hasMore={hasMore}
        loader={<h4>Cargando...</h4>}
        endMessage={<p>No hay mas personajes para cargar</p>}
      >
        <div className="grid-container flex flex-wrap justify-center">
          {characters.map(character => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Productos;
