export interface Expense {
  id: number;
  description: string;
  category: string;
  value: number;
  month: string;
  day: string;
}

export function loadExpenses(yearMonth: string): Promise<Expense[]> {
  return fetch(
    `http://localhost:3001/despesas?mes=${yearMonth}&_sort=dia`
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Not possible to load data');
    }
  });
}
