let valueOfCounter = 1

function counter(ms = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(valueOfCounter++)
        }, ms)
    })
}

// Async
// counter().then(console.log)
// counter().then(console.log)
// counter().then(console.log)
// counter().then(console.log)
// counter().then(console.log)

// Sync
counter()
    .then((value) => {
        console.log(value)
        return counter() // recursive new Promise()
    })
    .then((value) => {
        console.log(value)
        return counter(3000)
    })
    .then(console.log)

// .then() --> resolve() --> try {}
// .catch() --> reject() --> catch (error) {}
