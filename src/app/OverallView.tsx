import { Expense } from './backend';
import { formatReal } from './utilities';

interface OverallViewProps {
  expenses: Expense[];
}

export default function OverallView(props: OverallViewProps) {
  const total = calculateTotal(props.expenses);
  return (
    <div>
      Overall Expense: <strong>{formatReal(total)}</strong>
    </div>
  );
}

function calculateTotal(expenses: Expense[]): number {
  let total = 0;
  for (let expense of expenses) {
    total += expense.value;
  }
  return total;
}
