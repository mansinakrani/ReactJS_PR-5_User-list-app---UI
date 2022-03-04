import React, { useState } from 'react';

import './App.css';
import { users } from './components/UserDetails';
import UserList from './components/UserList';

type user = any;
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<user | null>(null);
  return (
    <div className="App">
     <UserList users={users} handleMouseOver={(user) => { setUser(user); }} />
    </div>
  );
}

export default App;