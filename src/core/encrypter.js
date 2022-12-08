const bcrypt = require('bcrypt');

const Encrypt = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    return { salt, password: encryptedPassword }
}

const ValidatePassword = async (password, hashedPassword) => {
    const validPassword = await bcrypt.compare(password, hashedPassword);
    return !!validPassword
}

module.exports = {
    Encrypt,
    ValidatePassword
}