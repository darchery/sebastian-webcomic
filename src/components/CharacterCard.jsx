import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {

    return (
        <Link to={`/characters/${character.id}`} className="character-card-link">
            <div className="character-card">
                <img src={character.busto_image_url} alt={character.name} />
                <div className="character-info">
                    <h3>{character.name}</h3>
                    {character.age && <p className="character-age">Edad: {character.age}</p>}
                    <p className={`character-bio`}>
                        {character.short_phrase}
                    </p>
                </div>
            </div>
        </Link>
    )
}