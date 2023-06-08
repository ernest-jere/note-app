var app = angular.module("noteApp", []); 
app.controller("noteCtrl", function($scope) {
    $scope.message = "";
    $scope.left = function() {
        return 100 - $scope.message.length;
    };
    $scope.clear = function() {
        $scope.message = "";
        const textNote = document.querySelector("textarea").value = "";
    };
    $scope.save = function() {
        if($scope.message == ""){
            return;
        }else{
            const para = document.createElement("p");
            const div = document.createElement("div");
            const notes = document.querySelector("#noteList");
            const textNote = document.querySelector("textarea");
            div.setAttribute("style",
            "color: black; border: 1px solid black; width:315px; overflow:hidden; white-space: nowrap");
            para.textContent = $scope.message;
            div.appendChild(para);
            notes.appendChild(div);
            div.addEventListener("click", function(){
                textNote.value = para.textContent;
                $scope.message = para.textContent;
                notes.removeChild(div);
            })
            $scope.message = "";
            textNote.value = "";
        }
    };
});