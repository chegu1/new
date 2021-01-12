import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'chegu.mani9@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'chegu',
        email: 'chegu.mani55@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Akhila',
        email: 'manikanta@newsclick.in',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users