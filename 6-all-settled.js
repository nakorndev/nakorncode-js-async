function get(ms, label) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ms >= 5000) {
                reject(new Error('Timeup!'))
            } else {
                resolve(`[${label}] ${new Date()}`)
            }
        }, ms)
    })
}

// get(3000, 'a').then(console.log)
// get(2000, 'b').then(console.log)
// get(2500, 'c').then(console.log)

// Promise.all([
//     get(3000, 'a'),
//     get(2000, 'b'),
//     get(2500, 'c')
// ]).then(console.log)

// Promise.race([
//     get(3000, 'a'),
//     get(2000, 'b'),
//     get(2500, 'c')
// ]).then(console.log)

Promise.allSettled([
    get(5500, 'a'),
    get(2000, 'b'),
    get(4000, 'c')
]).then(console.log)
