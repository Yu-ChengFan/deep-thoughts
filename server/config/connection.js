const mongoose = require('mongoose');
const v = 0
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts', {

});

module.exports = mongoose.connection;
