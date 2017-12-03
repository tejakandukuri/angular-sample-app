(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger) {
    var vm = this;

    vm.people = [];
    vm.title = 'Tab 1';

    activate();

    function activate() {
      logger.info('Activated Tab 1 View');
      dataservice.getPeople().then(function(data) {
        vm.people = data;
      })
    }

    function getPeople() {

    }
  }
})();
