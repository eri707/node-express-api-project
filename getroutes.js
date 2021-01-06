const fs = require('fs');
module.exports = function (app) {
    //get a list of food recipes
    app.get('/', function (req, res) {
        fs.readdir('data', (err, files) => {
            if (err) {
                console.log(err);
            }
            else {
                let recipes = [];
                files.forEach(file => {
                    let recipe = JSON.parse(fs.readFileSync(`data/${file}`));
                    recipes.push(recipe);
                })
                res.send(recipes);
            }
        })
    });
    // get a single food recipe
    // recipeId is from user
    app.get('/:recipeId', function (req, res) {
        // find a recipe which matches with req.params.recipeId 
        // req.params is the way to access to the recipeId
        // ele.id is from database
        let recipe = JSON.parse(fs.readFileSync(`data/${req.params.recipeId}.json`));
        res.send(recipe);
    });
}