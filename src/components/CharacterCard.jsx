import { useState } from "react";

export default function CharacterCard({ character }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="character-card" onClick={() => setExpanded(!expanded)}>
            <img src={character.busto_image_url} alt={character.name} />
            <div className="character-info">
                <h3>{character.name}</h3>
                {character.age && <p className="character-age">Edad: {character.age}</p>}
                <p className={`character-bio ${expanded ? 'expanded' : ''}`}>
                    {character.bio}
                </p>
            </div>
        </div>
    )    
}