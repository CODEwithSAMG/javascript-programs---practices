// duplicary remove by set method
const array = [1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 6];

const removeDuplicate = [...new Set(array)]


console.log(removeDuplicate)

// 2. way of remove duplicacy using filter method
const array2 = [1,2,3,4,4,5,5,5, 6,7,6];

const removeDuplicate2 = array.filter((val, index)=>{
    return array.indexOf(val) === index

})


console.log(removeDuplicate2)
