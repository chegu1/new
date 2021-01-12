import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/user.js';
import products from './data/product.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Orders from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Orders.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id;
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleProducts)
        console.log('data imported'.green.inverse)
        process.exit()
    } catch (e) {
        console.error(`${e}`.red.bold.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Orders.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        console.log('data deleted'.red.inverse)
        process.exit()
    } catch (e) {
        console.error(`${e}`.red.bold.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
