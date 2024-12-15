import React from "react";

function CharacterCard({ character }) {

    // Extract the episode ID from each URL in the character.episode array
  const episodeNumbers = character.episode.map((url) => {
    const episodeId = url.split("/").pop(); // Get the last part of the URL (episode ID)
    return episodeId;
  });
  return (
    <div className="container mt-5 mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src={character.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{character.name} </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Status: {character.status}</li>
          <li className="list-group-item">Gender: {character.gender}</li>
          <li className="list-group-item">
            First seen in: {character.origin.name}
          </li>
          <li className="list-group-item">
            Last seen in: {character.location.name}
          </li>
          <li className="list-group-item">
            Episodes:{" "}
            {episodeNumbers.length > 0 ? (
                  episodeNumbers.map((episodeId, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span> - </span>} 
                      <span>{episodeId}</span>
                    </React.Fragment>
                  ))
                ) : (
                  <p>No episodes found</p>
                )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterCard;
