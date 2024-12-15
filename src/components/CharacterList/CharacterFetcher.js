import React, { useState, useEffect } from "react";
import CharacterTable from "./CharacterTable";

function CharacterFetcher() {

    // State to store the fetched characters
  const [characters, setCharacters] = useState([]);
  // State to handle the loading status
  const [loading, setLoading] = useState(true);


  // Function to fetch all character data from the API
  const fetchAllCharacters = async () => {
    try {
      const allPages = [];
      let currentPage = 1;
      let totalPages = 1;

        // Loop to fetch all pages of characters until we reach the total pages
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

      // Once all data is fetched, set the characters state and loading to false
      setCharacters(allPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setLoading(false);
    }
  };
    // Run the fetchAllCharacters function when the component mounts
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
