'use strict';

angular.module('hipooApp')
    .factory('Activate', function ($resource) {
        return $resource('api/activate', {}, {
            'get': { method: 'GET', params: {}, isArray: false}
        });
    });


