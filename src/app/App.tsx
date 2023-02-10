import ExpensesScreen from './ExpensesScreen';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/despesas/:yearMonth" element={<ExpensesScreen />} />
        <Route path="/" element={<Navigate to="/despesas/2021-06" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
