import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from "./components/MemberForm";
import Members from "./components/Members"; 

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Ian",
      role: "Student",
      email: "ian@gmail.com"
  },
    {
      id: 2,
      name: "Carlos",
      role: "Team Lead",
      email: "carlos@gmail.com"
  }
]);

const addNewMember = member => {
  const newMember = {
    id: Date.now(),
    name: member.name,
    role: member.role,
    email: member.email
  };
  setMembers([...members, newMember]);
};

  return (
    <div className="App">
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
