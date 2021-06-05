function delay(ms, cb) {
    setTimeout(() => {
        if (ms >= 5000) {
            cb(new Error('Timeup!'))
        } else {
            cb(null, new Date())
        }
    }, ms)
}

const handle = (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Success:', data)
    }
}

// delay(3000, handle)
// delay(5500, handle)

// new Promise((resolve, reject) => {})

function delayPromise(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ms >= 5000) {
                reject(new Error('Timeup!'))
            } else {
                resolve(new Date())
            }
        }, ms)
    })
}

// delayPromise(3000)
//     .then((data) => console.log(data)) // resolve()
//     .catch((err) => console.error(err)) // reject()

// delayPromise(5500)
//     .then((data) => console.log(data)) // resolve()
//     .catch((err) => console.error(err)) // reject()

delayPromise(3000).then(console.log).catch(console.error)
delayPromise(5500).then(console.log).catch(console.error)
