const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const User = require('../models/userModel.js');
const Business = require('../models/businessModel.js');

const plans = ["Standard", "Gold", "Platinum"];
const categories = ["Commerce", "Maintenance", "Finance", "Health", "Recreation", "General"];

const generateUsers = async function () {
    const users = await Promise.all(
        Array.from({ length: 20 }).map(async () => {
            const plainPassword = faker.internet.password(6);
            const password = await bcrypt.hash(plainPassword, 10);
            return {
                name: faker.internet.username().substring(0, 8),
                email: faker.internet.email({ firstName: this.name }),
                password,
                plainPassword,
                plan: plans[Math.floor(Math.random() * 3)]
            }
        })
    )
    return users;
}

const clearUsers = async function () {
    const result = await User.deleteMany({ user: { $ne: "user1" } })
}

const seedUsers = async function () {
    const newUsers = generateUsers();
    await User.insertMany(newUsers);
}

const generateBusinesses = async function () {
    const users = await User.find();
    const businesses = [];
    const businessOwnersIndex = 4;
    for (let i = 1; i < businessOwnersIndex; i++) {
        const newBusiness = {
            name: faker.company.companyName(),
            description: faker.company.bs(),
            category: categories[Math.floor(Math.random() * categories.length)],
            owner: users[i]._id,
            subscribers:[users[businessOwnersIndex + (Math.floor(Math.random() * (users.length - businessOwnersIndex - 1)))]._id],//find a random user whose not a business owner
        }
        businesses.push(newBusiness);
    }
    return businesses;
}

const seedBusinesses = async function() {
    const businesses = await generateBusinesses();
    await Business.insertMany(businesses);
}

const seedDB = async function () {
    await clearUsers();
    await Business.deleteMany();
    await seedUsers();
    await seedBusinesses();
}
module.exports = { seedDB }