const fs = require('fs');
// helper function to generate id for each record(recipe)
const generateId = () => {
    let resultString = '';
    for (i = 0; i < 6; i += 1) {
        let letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomLetters = letters[Math.floor(Math.random() * letters.length)];
        resultString += randomLetters;
    }
    return resultString;
}
module.exports = function (app) {
    app.post('/', function (req, res) {
        // create id for each recipe
        req.body.id = generateId();
        // store data in a directory from user
        let data = JSON.stringify(req.body);
        fs.writeFile(`data/${req.body.id}.json`, data, (err) => {
            if (err) throw err;
            res.send(req.body);
        });
    });
}