import bcrypt from 'bcrypt'


export const register = async(req,res) => {
    const {userName , email , password} = req.body

    // Function to hash the password
    const hashPassword = await bcrypt.hash(password, 10)
    res.send(hashPassword)
}

export const login = (req,res) => {
    res.send('login route calledd')
}

export const logout = (req,res) => {
    res.send('logout route calledd')
}