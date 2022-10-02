import React, { useState } from 'react';
import './App.scss';
import { UsersList } from './components/UsersList';
import { InfoField } from './components/InfoField';

function App() {
  const [userdata, setUserData] = useState([
    'Іванов Іван Іванович',
    'Петров Петро Петрович',
    'Сидоров Сидор Сидорович'
  ]);
  
  const [selected, setSelected] = useState('');
  const [activeAdding, setActiveAdding] = useState(false);

  return (
    <div className="App">
      <main className="App__main">
        <UsersList 
          userdata={userdata}
          activeAdding={activeAdding}
          setActiveAdding={setActiveAdding}
        />
        <InfoField 
          userdata={userdata}
          setUserData={setUserData}
          activeAdding={activeAdding}
        />
      </main>
    </div>
  );
}

export default App;
