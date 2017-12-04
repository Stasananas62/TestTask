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
    console.log('Button2');
    };
});
var now = new Date();
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
