// function expression
// arrow function
// function anonymous (ฟังก์ชั่นที่ไร้ตัวตน)

// function counter()   <-- declare
// function ()          <-- anonymous

// function counter() { return }
// call counter() get return

// function () { return }
// call anonymous ??? get return

function counter() {
    return setTimeout(function () {
        console.log('after 3000')
        return new Date()
    }, 3000)
}

console.log(new Date())

const data = counter() // wait?
console.log(data)
