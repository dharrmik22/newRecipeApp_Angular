angular.module('recipeBookApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        // Default route
        $urlRouterProvider.otherwise('/');

        // Define states (routes)
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .state('recipeDetail', {
                url: '/recipe/:id',
                templateUrl: 'views/recipe-detail.html',
                controller: 'RecipeDetailController'
            })
            .state('addRecipe', {
                url: '/add',
                templateUrl: 'views/add-recipe.html',
                controller: 'AddRecipeController'
            });
    })
    .controller('HomeController', ['$scope', 'RecipeService', function($scope, RecipeService) {
        $scope.recipes = RecipeService.getAllRecipes();
    }])
    .controller('RecipeDetailController', ['$scope', '$stateParams', 'RecipeService', function($scope, $stateParams, RecipeService) {
        var recipeId = $stateParams.id;
        $scope.recipe = RecipeService.getRecipeById(recipeId);
    }])
    .controller('AddRecipeController', ['$scope', '$state', 'RecipeService', function($scope, $state, RecipeService) {
        $scope.recipe = { name: '', ingredients: '', instructions: '' };

        $scope.addRecipe = function() {
            RecipeService.addRecipe($scope.recipe);
            $state.go('home');  // Go back to the home page
        };
    }]);
