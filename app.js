const vowels = ['a', 'b', 'c', 'd', 'e'];
const search = (array, element) => {
    for ( let i = 0 ; i < array.length; i++) {
    If (array[i] === element) { return i }
    };
}
console.log(serarch(vowels, 'b'));