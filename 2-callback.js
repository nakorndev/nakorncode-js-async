function queueJob(string, cb) {
    const ms = string.length * 1000
    setTimeout(() => {
        if (Number.isNaN(Number(string))) {
            cb(null, string) // callback
        } else {
            cb(new Error('Input is not string'))
        }
    }, ms)
}

const handle = (err, data) => {
    if (err) {
        console.error('Error:', err)
    } else {
        console.log('Success:', data)
    }
}

queueJob('apple', handle)
queueJob('1234', handle)
queueJob('banana', handle)
queueJob('cherry', handle)
