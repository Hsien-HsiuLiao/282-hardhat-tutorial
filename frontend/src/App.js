import React, { useEffect, useState } from "react";
import getBlockchain from './ethereum.js';

function App() {
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { token } = await getBlockchain();
      setToken(token);
    };
    init();
  }, []);

  if(
    typeof token === 'undefined'
  ) {
    return 'Loading...';
  }

  return (
    <div className="App">
    app loaded
    </div>
  );
}

export default App;