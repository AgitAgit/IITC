const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const User = require('../models/userModel.js');
const Business = require('../models/businessModel.js');

const generateUsers = async () => {
    return await Promise.all(
        Array.from({length:10}).map(async() => {
            const plainPassword = faker.internet.password(6);
            const password = await bcrypt.hash(plainPassword, 10);
            return {
                
            }
        })
    )
}