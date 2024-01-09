import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const countMonths = (from: Date, to: Date = new Date()): number =>{
    let firstYear = 0;
    let wholeYears = 0;
    let newYear = 0;

    if(to.getFullYear() != from.getFullYear()){

        newYear = to.getMonth();
        wholeYears = (to.getFullYear() - from.getFullYear() - 1) * 12;
        firstYear = 12 - from.getMonth();

    } else {

        firstYear = to.getMonth() - from.getMonth();

    }

    return firstYear + wholeYears + newYear + 1;
};

export const getMonthName = (index: number): string => {

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December',
    ];

    return monthNames[index];

};

export const userImage = (url: string, base: string): string =>
    `${base}${url}`;

 export const useTitle = (title:string, suffix: string) => 
    `${title} | ${suffix}`;

export function getTimeDiff(date1: Date, date2: Date = new Date(Date.now() + 1000 * 60 * 60 * 24)){
    const d1 = dayjs(date1);
    const d2 = dayjs(date2);

    const duration = dayjs.duration(d2.diff(d1));

    let n = 0;
    let d = 'day';

    if(duration.as('days') <= 7){
        d = 'day';
        n = duration.as('days');
    } else if(duration.as('weeks') <= 1){
        d = 'week';
        n = duration.as('weeks');
    } else if(duration.as('months') <= 1){
        d = 'month';
        n = duration.as('months');
    } else {
        d = 'year';
        n = duration.as('years');
    }

    n = Math.trunc(n);

    return `${Math.trunc(n)} ${d}${n > 1 ? 's' : ''}`
}