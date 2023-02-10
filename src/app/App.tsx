import ExpensesScreen from './ExpensesScreen';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/despesas/:yearMonth">
          <ExpensesScreen />
        </Route>
        <Redirect to="/despesas/2021-06" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
