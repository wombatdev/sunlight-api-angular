

"use strict";

(function(){
    angular
        .module ( "words" )
        .factory ( "WordFactory", [
            "$resource",
            WordFactoryFunction
        ]);

    function WordFactoryFunction ( $resource ) {
        return $resource( "http://capitolwords.org/api/1/dates.json?&percentages=true&granularity=year&apikey=2da779aa1c1b4a4980f0296a20cfc07e" )
        };
})();
