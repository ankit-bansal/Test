'use strict';

angularApp.service('userService', function ($http, $q) {
    return {
        list: function () {
            var deferred = $q.defer();
            {
                deferred.resolve(
                        ['Cloudy', 'Sunny', 'Rainy']);
            }
            return deferred.promise;
        }

    };
});