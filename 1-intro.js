const list = ['a', 'b', 'c']
console.log(list)
console.log(list.map(function (value) {
    return value.toUpperCase()
}))
console.log(list.map(v => v.toUpperCase()))

// function expression
// arrow function

setTimeout(() => console.log('After 3 seconds'), 3000)
// call function
// send callback --> arrow function --> 3s --> call arrow function (callback)
