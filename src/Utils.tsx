export interface IPeriod {
  start_date: Date,
  end_date?: Date,
  ongoing: boolean
  getDifferenceInYearsAndMonths: () => string;
}

export class Period implements IPeriod {
  start_date: Date;
  end_date?: Date;
  ongoing: boolean;

  constructor(start_date: Date, end_date?: Date) {
    this.start_date = start_date;
    this.end_date = end_date;
    if (end_date) { this.ongoing = false; }
    else { this.ongoing = true; }
  }

  getDifferenceInYearsAndMonths(): string {
      let startYear = this.start_date.getFullYear();
      let startMonth = this.start_date.getMonth();

      let end_date: Date = this.end_date ? this.end_date : new Date();
      let endYear = end_date.getFullYear();
      let endMonth = end_date.getMonth();

      let yearDiff = endYear - startYear;
      let monthDiff = endMonth - startMonth;

      if (monthDiff < 0) {
          yearDiff--;
          monthDiff += 12;
      }

      if (yearDiff > 0) {
          return `${yearDiff} year${yearDiff > 1 ? 's' : ''} and ${monthDiff} month${monthDiff > 1 ? 's' : ''}`;
      } else {
          return `${monthDiff} month${monthDiff > 1 ? 's' : ''}`;
      }
  }
  
}


export function monthNumberToString(month: number | any) : string {
  let monthNumberToString = new Map();
  monthNumberToString.set(1, "January");
  monthNumberToString.set(2, "February");
  monthNumberToString.set(3, "March");
  monthNumberToString.set(4, "April");
  monthNumberToString.set(5, "May");
  monthNumberToString.set(6, "June");
  monthNumberToString.set(7, "July");
  monthNumberToString.set(8, "August");
  monthNumberToString.set(9, "September");
  monthNumberToString.set(10, "October");
  monthNumberToString.set(11, "November");
  monthNumberToString.set(12, "December");

  return monthNumberToString.get(month);
}
