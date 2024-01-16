function jdate(date=new Date(), shortYear=false, typesafe=false) {
    if (typesafe && isJdate(date))
        return date;
    
    const month=date.getMonth()+1;
    const day=date.getDate();
    const year=date.getFullYear();
    return `${month}.${day}.${shortYear ? year.toString().slice(2) : year}`;
}

function isJdate(item) { //item: any -> boolean
    item=item.trim();
    if (typeof item!=='string')
        return false;
    
    return /^\d{1,2}\.\d{1,2}\.\d{2,4}$/.test(item);
}

function toDate(jdate) {
    if (jdate instanceof Date)
        return jdate;
    if (typeof jdate==='string') {
        jdate=jdate.trim();
        if (!isJdate(jdate))
            return null;
        
        let [month, day, year]=jdate.split('.');
        month--;
        if (year.length===2)
            year='20'+year;
        
        let date=new Date();
        date.setMonth(month);
        date.setDate(day);
        date.setFullYear(year);
        return date;
    }

    const lastAttempt=new Date(jdate);
    if (isNaN(lastAttempt))
        return null;
    else
        return lastAttempt;
}

module.exports={
    default: jdate,
    jdate,
    isJdate,
    toDate
};
