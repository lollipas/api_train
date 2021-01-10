console.log('server is startisng');
let express = require('express');
let data = require('./time.json');
let app = express();
const server = app.listen(3000, listening);
console.log('asdf');
function listening() {
    console.log('listening...');
}
app.get('/times', sendTime);
function sendTime(request, response) {
    response.send('Siin on ajad');
    console.log(request);
}
app.get('/all', sendAll);
function sendAll(request, response) {
    console.log("sent data");
    response.send(data);
}
