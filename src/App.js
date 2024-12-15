
import Header from "./components/Header/Header";
import TextSection from "./components/TextSection/TextSection";
import Button from "./components/Button";
import CharacterTable from "./components/CharacterList/CharacterTable";
import CharacterFetcher from "./Api";


function App() {
  return (
  <>
  <Header></Header>
  <TextSection></TextSection>
  <Button></Button>
  <CharacterFetcher></CharacterFetcher>
  </>
  
);
}

export default App;
