console.log('loaded frontend_app');

var frontend_app = angular.module('employees', []);
frontend_app.controller('emp_data', do_data);

function do_data($scope, $http) {

    $scope.read = function () {
        console.log('getting all data');
        $http.get('/api/v5/read').then(function (results) {
            console.log(results)
            $scope.employees = results.data;
        });
    }
    $scope.read();

    $scope.create = function () {
        console.log('creating employee');
        var data = {
            name: $scope.input_name,
            email: $scope.input_email,
            gender: $scope.input_gender,
            avatar: $scope.input_avatar
        }
        console.log(data);
        $http.post('/api/v5/create', data).then(function (result) {
            console.log(result);
            $scope.message = result.data.message;
            $scope.read();
        });
    }

    $scope.update = function (employee) {
        console.log('updating employee');
        console.log(employee);
        $http.put('/api/v5/update', employee), then(function (result) {
            console.log(result);
            $scope.message = result.data.message;
            $scope.read();
        });
    }

    $scope.delete = function (employee) {
        console.log('deleting employee');
        console.log(employee);
        $http.delete('/api/v5/delete' + employee._id).then(function (result) {
            console.log(result);
            $scope.message = result.data.message;
            $scope.read();
        });
    }
}