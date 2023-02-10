import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

interface SelectionYearMonthProps {
  yearMonth: string;
  onChangeYearMonth: (yearMonth: string) => void;
}

export default function SelectionYearMonth(props: SelectionYearMonthProps) {
  const yearMonth = props.yearMonth;
  const [year, month] = yearMonth.split('-');
  return (
    <div>
      <FormControl>
        <InputLabel id="select-year-label">Year</InputLabel>
        <Select
          labelId="select-year-label"
          id="select-year"
          value={year}
          onChange={evt =>
            props.onChangeYearMonth(evt.target.value + '-' + month)
          }
        >
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="select-month-label">Month</InputLabel>
        <Select
          labelId="select-month-label"
          id="select-month"
          value={month}
          onChange={evt =>
            props.onChangeYearMonth(year + '-' + evt.target.value)
          }
        >
          <MenuItem value="01">January</MenuItem>
          <MenuItem value="02">February</MenuItem>
          <MenuItem value="03">March</MenuItem>
          <MenuItem value="04">April</MenuItem>
          <MenuItem value="05">May</MenuItem>
          <MenuItem value="06">June</MenuItem>
          <MenuItem value="07">July</MenuItem>
          <MenuItem value="08">August</MenuItem>
          <MenuItem value="09">September</MenuItem>
          <MenuItem value="10">October</MenuItem>
          <MenuItem value="11">November</MenuItem>
          <MenuItem value="12">December</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
