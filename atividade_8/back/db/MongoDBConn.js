var mongoose = require('mongoose')


mongoose.set('useFindAndModify', false);

var mongoDB_URI = 'mongodb://127.0.0.1:27017/crudDisciplina';
mongoose.connect(mongoDB_URI, { useNewUrlParser: true });


var db = mongoose.connection;


db.on('connected', () => {
    console.log('Mongoose Connected to ' +mongoDB_URI);
});
db.on('discSearch workspace (ctrl + click)onnected', () => {
    console.log('Mongoose Disconnected to ' +mongoDB_URI);
});
db.on('error', (err) => {
    console.log('Mongoose Error: ' +err);
});