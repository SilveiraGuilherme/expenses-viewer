import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Expense, loadExpenses } from './backend';
import ExpensesTable from './ExpensesTable';
import OverallView from './OverallView';
import SelectionYearMonth from './SelectionYearMonth';

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const params = useParams<{ yearMonth: string }>();
  const yearMonth = params.yearMonth;

  useEffect(() => {
    loadExpenses(yearMonth).then(setExpenses);
  }, [yearMonth]);

  return (
    <div>
      <SelectionYearMonth yearMonth={yearMonth} />
      <OverallView expenses={expenses} />
      <ExpensesTable expenses={expenses} />
    </div>
  );
}
