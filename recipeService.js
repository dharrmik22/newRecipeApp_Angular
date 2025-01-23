angular.module('recipeBookApp')
    .service('RecipeService', function() {
        var recipes = [
            { id: 1, name: 'Spaghetti Bolognese', ingredients: 'Spaghetti, Beef, Tomato sauce', instructions: 'Cook pasta, prepare sauce, combine.' },
            { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, Curry paste, Coconut milk', instructions: 'Cook chicken, add curry paste, simmer with coconut milk.' }
        ];

        // Get all recipes
        this.getAllRecipes = function() {
            return recipes;
        };

        // Get recipe by ID
        this.getRecipeById = function(id) {
            return recipes.find(recipe => recipe.id == id);
        };

        // Add a new recipe
        this.addRecipe = function(recipe) {
            recipe.id = recipes.length + 1;  // Assign a new ID based on the length of the array
            recipes.push(recipe);
        };
    });
