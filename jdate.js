function jdate() {
    const now=new Date();
    const month=now.getMonth()+1;
    const day=now.getDate();
    const year=now.getFullYear();
    return `${month}.${day}.${year}`;
}

// One liner:
// `${new Date().getMonth()+1}.${new Date().getDate()}.${new Date().getFullYear()}`
