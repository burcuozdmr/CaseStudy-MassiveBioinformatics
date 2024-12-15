import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Filter({ characters, onFilter, onLabelsChange }) {
  const [species, setSpecies] = useState([]);
  const [genders, setGenders] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(""); // Track selected species
  const [selectedGender, setSelectedGender] = useState(""); // Track selected gender
  const [searchQuery, setSearchQuery] = useState(""); // Track search query
  const [status, setStatus] = useState("");
  // Store filtered characters

  // Extract unique species and gender values
  useEffect(() => {
    const uniqueSpecies = (characters) => {
      const speciesSet = new Set(); // To store unique species
      characters.forEach((character) => {
        if (character.species) {
          speciesSet.add(character.species); // Add species to the Set
        }
      });
      return [...speciesSet]; // Convert Set to an array
    };

    const uniqueGenders = (characters) => {
      const genderSet = new Set(); // To store unique gender
      characters.forEach((character) => {
        if (character.gender) {
          genderSet.add(character.gender); // Add gender to the Set
        }
      });
      return [...genderSet]; // Convert Set to an array
    };

    // Update species and gender states
    setSpecies(uniqueSpecies(characters));
    setGenders(uniqueGenders(characters));
  }, [characters]); // Re-run when characters prop changes

  useEffect(() => {
    let filtered = characters;

    if (status && status !== "") {
      filtered = filtered.filter((character) => character.status === status);
    }

    // Apply species filter if selected
    if (selectedSpecies && selectedSpecies !== "") {
      filtered = filtered.filter(
        (character) => character.species === selectedSpecies
      );
    }

    // Apply gender filter if selected
    if (selectedGender && selectedGender !== "") {
      filtered = filtered.filter(
        (character) => character.gender === selectedGender
      );
    }
    if (searchQuery && searchQuery !== "") {
      const query = searchQuery.trim().toLowerCase();
      const regex = new RegExp(`\\b${query}\\b`, "i"); // Kelime tam eşleşmesi için regex

      filtered = filtered.filter(
        (character) => regex.test(character.name.toLowerCase()) // İlgili regex ile arama
      );
    }

    onFilter(filtered);

    onLabelsChange({
      status,
      selectedSpecies,
      selectedGender,
      searchQuery,
    });
  }, [selectedSpecies, selectedGender, onFilter, onLabelsChange]); 



  return (
    <div className="container card text-bg-dark mb-3">
      <div className="card-body ">
        <div className="row gap-5 gap-sm-3 justify-content-center">
          <div className="col-lg-4 ">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ fontSize: "1.5rem", color: "green" }}
                />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search by name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              />
            </div>
          </div>
          <div className="col-lg-7 ">
            <div className="row gap-2">
              <select
                class="form-select form-select-md col"
                aria-label="Large select example"
                onChange={(e) => setStatus(e.target.value)}
                value={status || ""}
              >
                <option value="">Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="Unknown">Unknown</option>
              </select>
              <select
                class="form-select form-select-md col"
                aria-label="Large select example"
                onChange={(e) => setSelectedSpecies(e.target.value)}
                value={selectedSpecies}
              >
                <option value="">Species</option>
                {species.map((species, index) => (
                  <option value={species} key={index}>
                    {species}
                  </option>
                ))}
              </select>
              <select
                class="form-select form-select-md col"
                aria-label="Large select example"
                onChange={(e) => setSelectedGender(e.target.value)}
                value={selectedGender}
              >
                <option value="">Gender</option>
                {genders.map((gender, index) => (
                  <option value={gender} key={index}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
