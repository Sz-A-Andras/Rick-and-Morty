import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Character } from "./components/CharacterList";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route, useNavigate, Router } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/Profile" element={<Profile />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
