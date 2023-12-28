import React, { useState } from 'react';
import { useVocation } from './hooks/useVocation'; // adjust the path based on where your hook is located
import {Header} from './components/Header';
import { Main, Selector } from './components/classStyledComponents';

function App() {
  const classes = ['Choose one', 'Paladin', 'Druid', 'Sorcerer', 'Knight'];
  const [userType, setUserType] = useState(classes[0]);
  const VocationComponent = useVocation(userType);

  return (
    <Main>
      <Header />
      <h2>Choose your class</h2>
      <Selector onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUserType(e.target.value)}>
        {classes.map((c, i) => <option key={i} value={c}>{c}</option>)}
      </Selector>
      <br></br>
      {VocationComponent}
    </Main>
  );
}

export default App;
