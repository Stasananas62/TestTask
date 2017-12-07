var app = angular.module('GithubSearch', []);

	app.controller('SearchController', function SearchController($scope,GitHub) {
		$scope.executeSearch = function executeSearch() {
			GitHub.searchRepos($scope.query, function (error, data) {
				if (!error) {
					$scope.repos = data.items;
				}
			});
		};
      $scope.openRepo = function openRepo(name) {
          GitHub.getRepo(name, function (error, data) {
              if (!error) {
                  $scope.activeRepo = data;
                  GitHub.getReadme(name, function (error, data) {
                      if (!error) {
                          $scope.activeRepo.readme = data;
                      } else {
                          $scope.activeRepo.readme = 'No README found!';
                      }
                  });
              }
          });
      };
	});

	app.factory('GitHub', function GitHub($http) {
		return {
			searchRepos: function searchRepos(query, callback) {
				$http.get('https://api.github.com/search/repositories', { params: { q: query } })   //console.log(activeRepo);
				.then(function (data) {
					callback(null, data);
          console.log(data);
				})

			},
        getRepo: function getRepo(name, callback) {
            $http.get('https://api.github.com/repos/'+ name)
                .then(function (data) {
                    callback(null, data);
                    console.log("YO2");
                })

         },
        getReadme: function getReadme(name, callback) {
          $http.get('https://api.github.com/repos/'+ name +'/readme')
          .then(function (data) {
            callback(null, atob(data.content));
            console.log("YO3");
          })

        },
		};
	});
