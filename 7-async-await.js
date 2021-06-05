function delay(ms, label) {
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

// ใครเสร็จก่อน ก็เอามาใช้งาน
function tasks() {
    delay(3000, 'a').then(console.log)
    delay(2000, 'b').then(console.log)
    delay(1000, 'c').then(console.log)
}

// รอคนสุดท้ายเสร็จค่อยแสดงพร้อมกัน (แต่ยังคงทำงานคู่ขนาด)
function tasksAll() {
    Promise.all([
        delay(3000, 'a'),
        delay(2000, 'b'),
        delay(1000, 'c')
    ]).then(console.log)
}

// รอทีล่ะบรรทัดเหมือน sync
async function tasksAsync() {
    const a = await delay(3000, 'a')
    console.log(a)

    const b = await delay(2000, 'b')
    console.log(b)

    const c = await delay(1000, 'c')
    console.log(c)
}

// รอทีล่ะบรรทัดเหมือนกัน แต่มีปัญหา callback hell
function tasksSeq() {
    delay(3000, 'a').then(data => {
        console.log(data)
        delay(2000, 'b').then(data => {
            console.log(data)
            delay(1000, 'c').then(data => {
                console.log(data)
            })
        })
    })
}

// try catch บน async/await
async function tasksError() {
    try {
        const a = await delay(3000, 'a')
        console.log(a)
    
        const b = await delay(5500, 'b') // await reject = throw
        console.log(b)
    } catch (error) {
        console.log('Error!', error)
    }
}

// tasks()
// tasksAll()
// tasksAsync()
// tasksSeq()
tasksError()
