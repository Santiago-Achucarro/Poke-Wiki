import { ChakraProvider, Flex, ButtonGroup, Button } from "@chakra-ui/react";
import { Navbar } from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contacto } from "./Views/Contacto";
import "./App.css";
import { Home } from "./Views/Home";
import { Wiki } from "./Views/Wiki";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wiki" element={<Wiki />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
