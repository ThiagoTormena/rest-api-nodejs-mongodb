const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv:// <set here your connection>', { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true });
mongoose.set('useFindAndModify', false);

module.exports = mongoose;