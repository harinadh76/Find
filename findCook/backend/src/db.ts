import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/findCook').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB', error);
});
