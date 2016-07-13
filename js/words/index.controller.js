
"use strict";

(function(){
    angular
    .module("words")
    .controller("WordIndexController", [
        "WordFactory",
        WordIndexControllerFunction
    ]);

    function WordIndexControllerFunction (WordFactory) {
        this.words = WordFactory.get();
        console.log(this.words);
        this.search = function (query) {
            this.words = WordFactory.get({phrase: query});
        }
    }
}());
