type monthT=1|2|3|4|5|6|7|8|9|10|11|12;
type dayT=0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31;
type yearT=number;
type jdateT=`${monthT}.${dayT}.${yearT}`;

function jdate(date=new Date()): jdateT {
    const month: monthT=date.getMonth()+1 as monthT;
    const day: dayT=date.getDate() as dayT;
    const year: yearT=date.getFullYear();
    return `${month}.${day}.${year}`;
}

console.log(jdate());
