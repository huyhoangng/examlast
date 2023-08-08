var app= angular.module("myApp",[]);
app.controller("myCtrl", function($scope){
    console.log("My controller.....");

    $scope.users= [
        {productname: "Laptop", price: "2000"},
        {productname: "Table", price: "100"},
        {productname: "Chair", price: "200"}
    ];
    $scope.addUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added successfully";
    };
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };
    $scope.editUser = function(){
        $scope.message = "User Edited successfully";
    };
    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser));
        $scope.message = "User Deleted successfully";
    };
    $scope.clearMessage = function(){
        $scope.message= "";
    };
    
});

