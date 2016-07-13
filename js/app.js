
"use strict";

(function(){
  angular
  .module("capwords", [
    "ui.router",
    "words",
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("wordIndex", {
      url: "/words",
      templateUrl: "js/words/index.html",
      controller: "WordIndexController",
      controllerAs: "WordIndexViewModel"
  })
  }
})();
