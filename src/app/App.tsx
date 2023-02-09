import { useEffect } from 'react';
import { loadExpenses } from './backend';

function App() {
  useEffect(() => {
    loadExpenses('2021-06').then(console.log);
  }, []);

  return <div>Projeto base</div>;
}

export default App;
