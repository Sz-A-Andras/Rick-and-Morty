import React, { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { Character } from "./components/CharacterList";
import { useNavigate, useSearchParams } from "react-router-dom";
import CharProfile from "./components/CharProfile";

const Profile = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const [character, setCharacter] = useState<Character>();
  const [searchParams] = useSearchParams();
  const characterId = searchParams.get("id");
  useEffect(() => {
    apiClient
      .get("/character/" + characterId)
      .then((res) => setCharacter(res.data));
  }, []);
  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <CharProfile char={character as Character} navigate={navigateToHome} />
  );
};

export default Profile;
