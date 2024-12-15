import React, { useState } from "react";
import Header from "./components/Header/Header";
import TextSection from "./components/TextSection/TextSection";
import FetchButton from "./components/FetchButton";
import CharacterFetcher from "./components/CharacterList/CharacterFetcher";

function App() {
  const [showCharacterFetcher, setShowCharacterFetcher] = useState(false);

  // Toggle the visibility of CharacterFetcher
  const handleToggle = () => {
    setShowCharacterFetcher(!showCharacterFetcher);

  };
  return (
    <>
      <Header></Header>
      <TextSection></TextSection>
      <FetchButton onButtonClick={handleToggle}></FetchButton>
      {showCharacterFetcher && <CharacterFetcher />}
    </>
  );
}

export default App;
