import React from "react";

interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
}

interface Characters {
  characters: Character[];
}

const CharacterList = ({ characters }: Characters) => {
  return (
    <table className="table table-border">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Species</th>
          <th>Status</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((c) => (
          <tr key={c.id}>
            <td></td>
            <td>{c.name}</td>
            <td>{c.species}</td>
            <td>{c.status}</td>
            <td>
              <button className="btn btn-outline-danger">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharacterList;
