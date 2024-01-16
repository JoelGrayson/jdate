/**
 * Returns a date in the format \<month\>.\<day\>.\<year\>. If no date is passed it, in uses today as the date. Short year means showing 22 instead of 2022
 */
type Jdate=string;
export default function jdate(date?: Date, shortYear?: boolean, typesafe?: boolean): Jdate;
export function jdate(date?: Date, shortYear?: boolean, typesafe?: boolean): Jdate;
export function toDate(jdate: Jdate | any): Date | null;
export function isJdate(item: Jdate | any): boolean;
