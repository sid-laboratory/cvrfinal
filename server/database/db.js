const mongoose = require('mongoose');
// const sadra = 'mongodb+srv://xtraglitch50:braja2410@backendlearn.n2ma8qh.mongodb.net/'
    const sadra = 'mongodb+srv://xtraglitch50:braja2410@backendlearn.n2ma8qh.mongodb.net/'
// console.log(sadra)
const DB = async() => {
    try{
        await mongoose.connect(sadra);
    }
    catch(error){
        console.log(error);
    }
}

module.exports = DB;