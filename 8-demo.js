class Users {
    users = [
        { id: 1, name: 'John', age: 18 },
        { id: 2, name: 'Joe', age: 15 },
        { id: 3, name: 'Jane', age: 17 }
    ]

    getUser(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.users.map(v => v.id).indexOf(id)
                if (index < 0) {
                    return reject(new Error('User not found'))
                }
                return resolve(this.users[index])
            }, 2000)
        })
    }
}

const users = new Users()
// users.getUser(3)
//     .then(user => console.log(`[${user.id}] - ${user.name} (${user.age})`))
//     .catch(console.log)

async function main() {
    // 
}

main()
