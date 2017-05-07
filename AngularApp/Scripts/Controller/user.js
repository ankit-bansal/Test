'use strict';

angularApp.controller('userCtrl', function ($scope, userService) {

    $scope.datas = [{}];
    function initialGrid() {
        $scope.datas = [{
            updateField: null,
            id: null
        }];
        var arr = ["1", "2", "3"];
        $scope.columns = [{
            value: 'data.updateField',
            type: 'checkbox',
            title: 'Update',
            width: 50
        }, {
            "title": "Name",
            "type": "autocomplete",
            "src": "users",
            "value": "data.Product.Description",
            "width": "50"
        }];
    }

    $scope.getMasterData = function () {
        initialGrid();
        var promise = userService.list();
        promise.then(function (data) {
            $scope.users = data;

            $scope.columns = [{
                value: 'data.updateField',
                type: 'checkbox',
                title: 'Update',
                width: 50
            }, {
                "title": "Name",
                "type": "autocomplete",
                "src": $scope.users,
                "value": "data.Product.Description",
                "width": "50"
            }];
            $scope.datas = $scope.items;


        },
                function (data) {

                });
    };

    $scope.items = [
  {
      updateField: "true",
      id: 1,
      name: {
          first: "Marcin",
          last: "Warpechowski"
      },
      address: "Marienplatz 11, Munich",
      isActive: "Yes",
      Product: {
          Description: "Big Mac",
          Options: [
	      { Description: "Big Mac" },
	      { Description: "Big Mac & Co" }
	    ]
      }
  }
    //more items go here
];
});