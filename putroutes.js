const fs = require('fs');
module.exports = function (app) {
    app.put('/:recipeId', function (req, res) {
        // add 'id' property to 'body' object
        req.body.id = req.params.recipeId;
        // replace old recipe with new 
        let data = JSON.stringify(req.body);
        fs.writeFile(`data/${req.body.id}.json`, data, (err) => {
            if (err) throw err;
            res.send(req.body);
        });
    });
}