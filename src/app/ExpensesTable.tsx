import { TableContainer } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Expense } from './backend';
import { formatReal } from './utilities';

interface ExpensesScreenProps {
  expenses: Expense[];
}

export default function ExpensesTable(props: ExpensesScreenProps) {
  return (
    <TableContainer>
      <Table aria-label="Table of month expenses">
        <TableHead>
          <TableRow>
            <TableCell>Expense</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Day</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenses.map(expense => (
            <TableRow key={expense.id}>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.day}</TableCell>
              <TableCell align="right">{expense.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
