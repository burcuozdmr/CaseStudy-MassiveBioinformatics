import React, { useState, useEffect } from "react";
import CharacterTable from "./CharacterTable";

function CharacterFetcher() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllCharacters = async () => {
    try {
      const allPages = [];
      let currentPage = 1;
      let totalPages = 1;

      // Loop to fetch all pages
      while (currentPage <= totalPages) {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        );
        const data = await response.json();
        allPages.push(...data.results);
        totalPages = data.info.pages;
        // Get total pages from API response
        currentPage++;
      }

      setCharacters(allPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <CharacterTable characters={characters} />
      )}
    </div>
  );
}

export default CharacterFetcher;
