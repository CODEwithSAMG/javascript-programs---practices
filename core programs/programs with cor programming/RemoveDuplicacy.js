const array = [1, 2, 1, 2, 3, 4, 4, 6, 9, 9, 9, 9];


const removedDuplicateElements = (arr) => {
    let uniqueElements = [];
    let isUnique = {};

    for (let elements of arr) {
        if (!isUnique[elements]) {
            uniqueElements.push(elements);
            isUnique[elements] = true;
        }
    }

    return uniqueElements;
}
const removeDuplicacy = removedDuplicateElements(array);
console.log(removeDuplicacy)