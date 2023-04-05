const a = prompt("Enter the first numbers")%10;
const b = prompt("Enter the second numbers")%10;
const c = prompt("Enter the third numbers")%10;

function compare (a,b,c){
    if(a==b && a==c){
        return console.log(`${a}, ${b}, ${c} the last digits are equal`)
    }
    else{
             return console.log(`${a}, ${b}, ${c}: the last digits are not equal`)
    }
}

compare(a,b,c);