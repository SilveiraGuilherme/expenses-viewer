import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Expense, loadExpenses } from './backend';
import ExpensesTable from './ExpensesTable';
import OverallView from './OverallView';
import SelectionYearMonth from './SelectionYearMonth';

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const params = useParams<{ yearMonth: string }>();
  const yearMonth = params.yearMonth || '2021-06';
  const navigate = useNavigate();

  useEffect(() => {
    loadExpenses(yearMonth).then(setExpenses);
  }, [yearMonth]);

  return (
    <div>
      <SelectionYearMonth
        yearMonth={yearMonth}
        onChangeYearMonth={onChangeYearMonth}
      />
      <OverallView expenses={expenses} />
      <ExpensesTable expenses={expenses} />
    </div>
  );

  function onChangeYearMonth(newYearMonth: string) {
    navigate(`/despesas/${newYearMonth}`);
  }
}
