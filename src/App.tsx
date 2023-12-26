import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { ClassDruid } from './components/ClassDruid';
import { ClassKnight } from './components/ClassKnight';
import { ClassPaladin } from './components/ClassPaladin';
import { ClassSorcerer } from './components/ClassSorcerer';
import { Header } from './components/Header';
import styled from 'styled-components';

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [userClass, setUserClass] = useState<React.ReactNode | undefined>();
  const [userType, setUserType] = useState('');
  const classes = ['Choose one', 'Paladin', 'Druid', 'Sorcerer', 'Knight', ];

  async function getUserClass() {
    switch(userType) {
      case 'Paladin':
        return <ClassPaladin />;
      case 'Druid':
        return <ClassDruid />;
      case 'Sorcerer':
        return <ClassSorcerer />;
      case 'Knight':
        return <ClassKnight />;
      default:
        return <></>;
    }
  }
  useEffect(() => {
    const fetchUserClass = async () => {
      const result = await getUserClass();
      setUserClass(result);
    };

    fetchUserClass();
  }, [userType]);
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <Header />
      <h2>Choose your class</h2>
      <Selector onChange={(e) => setUserType(e.target.value)}>
        {classes.map((c, i) => <option key={i} value={c}>{c}</option>)}
      </Selector>
      <br></br>
      {userClass}

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;

const Selector = styled.select`
  width: 200px;
  padding: 6px 20px;
  `;