import { useEffect, useState } from 'react';
import { Expense, loadExpenses } from './backend';
import ExpensesTable from './ExpensesTable';
import OverallView from './OverallView';
import SelectionYearMonth from './SelectionYearMonth';

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    loadExpenses('2021-06').then(setExpenses);
  }, []);

  return (
    <div>
      <SelectionYearMonth />
      <OverallView expenses={expenses} />
      <ExpensesTable expenses={expenses} />
    </div>
  );
}
