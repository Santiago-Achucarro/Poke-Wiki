import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Wiki, Pokedex } from "./Views";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/pokedex" element={<Pokedex />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
