export const extractNumbers = (string) => {
    let str = string.split('-')[1];
    let arr = str.split('');
    arr.pop();
    arr.pop();
    return Number(arr.join(''));
}

//we assume that the arguments here are integers
export const isBillDueSoonOrUpcoming = (billDate, currentDate) => {
    if(billDate >= currentDate && billDate <= currentDate + 5)
        return 'due soon'
    else if(billDate < currentDate)
        return 'paid'
    else
        return 'upcoming';
}
