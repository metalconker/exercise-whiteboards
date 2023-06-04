//  ╔═╗┌┬┐┬─┐┬┌┐┌┌─┐
//  ╚═╗ │ ├┬┘│││││ ┬
//  ╚═╝ ┴ ┴└─┴┘└┘└─┘

// String case insensitive equals method
export function caseInsensitiveEquals(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2.toLowerCase();
}

//  ╔╦╗┌─┐┌┬┐┌─┐
//   ║║├─┤ │ ├┤
//  ═╩╝┴ ┴ ┴ └─┘

// Returns the ISO week of the date.
export function getWeek(date_input: any){
  var date = new Date(date_input);
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};

// Returns the four-digit year corresponding to the ISO week of the date.
export function getWeekYear(date_input: Date){
  var date = new Date(date_input.getTime());
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  return date.getFullYear();
};