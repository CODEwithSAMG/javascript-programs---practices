function printTable () {
    var num = 8;
    // num = Number(prompt("Enter the table Number?"));
    for (var i = 1; i <= 10; i++) {
        let result = num * i;
        console.log(`${num} * ${i} = ${result}`)

    }
}

printTable();