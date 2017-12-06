// var app = angular.module('githubsearch', []);
//
// app.controller('SearchController', function SearchController($scope,GitHub) {
//   $scope.executeSearch = function executeSearch() {
//     GitHub.searchRepos($scope.query, function (error, data) {
//       if (!error) {
//         $scope.repos = data.items;
//       }
//     });
//   };
//     $scope.openRepo = function openRepo(name) {
//         GitHub.getRepo(name, function (error, data) {
//             if (!error) {
//                 $scope.activeRepo = data;
//                 GitHub.getReadme(name, function (error, data) {
//                     if (!error) {
//                         $scope.activeRepo.readme = data;
//                     } else {
//                         $scope.activeRepo.readme = 'No README found!';
//                     }
//                 });
//             }
//         });
//     };
// });
//
// app.factory('GitHub', function GitHub($http) {
//   return {
//     searchRepos: function searchRepos(query, callback) {
//       $http.get('https://api.github.com/search/repositories', { params: { q: query } })
//       .then(function (data) {
//         callback(null, data);
//       })
//     },
//       getRepo: function getRepo(name, callback) {
//           $http.get('https://api.github.com/repos/'+ name)
//               .then(function (data) {
//                   callback(null, data);
//               })
//        },
//       getReadme: function getReadme(name, callback) {
//         $http.get('https://api.github.com/repos/'+ name +'/readme')
//         .then(function (data) {
//           callback(null, atob(data.content));
//         })
//       },
//   };
// });




var app = angular.module('app',[]);

app.controller('CtrlInput',function($scope) {
  $scope.Button1 = function () {
    $scope.time = now;
      console.log('You');
      };
  $scope.hello = "Hello World";
});

app.controller('CtrlButton',function($scope) {

$scope.Button2 = function () {
  $scope.time = "Button2";
    console.log(app);
    };
});
var now = new Date();

searchRepos: function searchRepos(query, callback) {
    $http.get('https://api.github.com/search/repositories', { params: { q: query } })
        .success(function (data) {
            callback(null, data);
        })
        .error(function (e) {
            callback(e);
        });
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("https://api.github.com/users/octocat/repos")
    .then(function(response) {
        $scope.myWelcome = response.data;
    });
});




  //var time = date.getDate();
// var expectFriendNames = function(expectedNames, key) {
//   element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
//     arr.forEach(function(wd, i) {
//       expect(wd.getText()).toMatch(expectedNames[i]);
//     });
//   });
// };
//
// it('should search across all fields when filtering with a string', function() {
//   var searchText = element(by.model('searchText'));
//   searchText.clear();
//   searchText.sendKeys('m');
//   expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');
//
//   searchText.clear();
//   searchText.sendKeys('76');
//   expectFriendNames(['John', 'Julie'], 'friend');
// });
