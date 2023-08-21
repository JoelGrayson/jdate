module.exports=function jdate(date=new Date(), shortYear=false) {
    const month=date.getMonth()+1;
    const day=date.getDate();
    const year=date.getFullYear();
    return `${month}.${day}.${shortYear ? year.toString().slice(2) : year}`;
}
