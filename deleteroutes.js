const fs = require('fs');
module.exports = function (app) {
    app.delete('/:recipeId', function (req, res) {
        // unlink deletes a file from the hard drive
        fs.unlink(`data/${req.params.recipeId}.json`, () => {
            res.send(true);
        });
    })
}