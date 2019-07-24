
/**
 * 
 * @param {Array<number>} arr 
 */
function sum(arr) {
    let result = 0;
    arr.forEach(v => {
        result += v;
    });

    return result;
}

sum([1, 2, 3]);