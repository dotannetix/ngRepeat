(function () {
    var app = angular.module("app");
    app.controller("main", main)

    function main() {
        var vm = this;
        vm.colorsBox = ""
        vm.title = "hello from main"
        vm.colors = ["red", "gray", "green", "blue", "yellow"];
        var ul = document.getElementById("colorList");
        
        
//        for (var i = 0; i < colors.length; i++) {
//            var li = document.createElement("li");
//            li.innerHTML = i+":" +colors[i];
//            li.style.color=colors[i];
//            ul.appendChild(li);
//        }
    }
})();