import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPokemon } from "./pages/public/searchPokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
