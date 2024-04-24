import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  return (
    <div className="card shadow-md flex m-3 flex-col md:w-3/12">
      <Link to={`/character/${character.id}`} >
        <img src={character.image} alt={character.name} />
      </Link>
      <div className="card-text flex m-3 font-bold justify-center">
        <h2>{character.name}</h2>
      </div>
    </div>
  );
};

Card.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Card;
